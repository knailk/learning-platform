package utils

import (
	"bytes"
	"encoding/base64"
	"errors"
	"image"
	"image/jpeg"
	"image/png"
	"net/http"
	"strconv"
	"strings"
	"time"
	"fmt"

	"github.com/disintegration/imaging"
	pdfApi "github.com/pdfcpu/pdfcpu/pkg/api"
	pdfModel "github.com/pdfcpu/pdfcpu/pkg/pdfcpu/model"
)

const (
	ImageTypeJPEG        = "image/jpeg"
	ImageTypePNG         = "image/png"
	PDFType              = "application/pdf"
	ImageAvatarMaxWidth  = 5000
	ImageAvatarMaxHeight = 5000
	ImageMaxSize         = 1024 * 1024
	ResizeImageMaxHeigh  = 1000
)

var AvatarMineTypes = []MineType{
	{name: ImageTypeJPEG, maxWidth: ImageAvatarMaxWidth, maxHeight: ImageAvatarMaxHeight, maxSize: ImageMaxSize},
	{name: ImageTypePNG, maxWidth: ImageAvatarMaxWidth, maxHeight: ImageAvatarMaxHeight, maxSize: ImageMaxSize},
}

var AssetMineTypes = []MineType{
	{name: PDFType, maxSize: 20 * 1024 * 1024},
	{name: ImageTypeJPEG, maxSize: 20 * 1024 * 1024},
	{name: ImageTypePNG, maxSize: 20 * 1024 * 1024},
}

type MineType struct {
	name      string
	maxWidth  int
	maxHeight int
	maxSize   int
}

type File struct {
	FileData []byte
	FileName string
	FileType string
}

// NewImageDataFile constructor function for ImageDataFile
func NewFileData(fileBase64String string, fileName string, acceptedMineTypes []MineType) (*File, error) {
	var (
		file File
		err  error
	)

	// Remove data:image/...;base64
	spl := strings.Split(fileBase64String, ",")

	// image data after comma
	fileData := spl[len(spl)-1]

	// Decode base64 string
	dataBytes, err := base64.StdEncoding.DecodeString(fileData)
	if err != nil {
		fmt.Errorf("error decoding base64 string: %w", err)
		return &File{}, err
	}

	// Set file data
	file.FileData = dataBytes

	// Set file name
	mimeType := http.DetectContentType(dataBytes)
	err = file.SetFileName(mimeType, fileName)
	if err != nil {
		fmt.Errorf("error setting file type: %w", err)
		return &File{}, err
	}

	// Set file type
	file.FileType = mimeType

	// Validate file
	err = file.Validate(acceptedMineTypes)
	if err != nil {
		fmt.Errorf("validate file error: %w", err)
		return &File{}, err
	}
	return &file, nil
}

// SetFileName set file name
func (i *File) SetFileName(mimeType string, fileName string) error {
	spl := strings.Split(fileName, ".")
	fn := strings.Join(spl[:len(spl)-1], ".")

	if mimeType == ImageTypeJPEG {
		i.FileName = fn + "-" + strconv.FormatInt(time.Now().Unix(), 10) + ".jpg"
	} else if mimeType == ImageTypePNG {
		i.FileName = fn + "-" + strconv.FormatInt(time.Now().Unix(), 10) + ".png"
	} else if mimeType == PDFType {
		i.FileName = fn + "-" + strconv.FormatInt(time.Now().Unix(), 10) + ".pdf"
	} else {
		return errors.New("invalid file format")
	}

	return nil
}

func validateJPEG(file *File, jpegType MineType) error {
	img, err := jpeg.Decode(bytes.NewReader(file.FileData))
	if err != nil {
		return err
	}

	bounds := img.Bounds()
	if (jpegType.maxWidth + jpegType.maxHeight) > 0 {
		if bounds.Dx() >= jpegType.maxWidth || bounds.Dy() >= jpegType.maxHeight {
			return errors.New("exceed size of file limit")
		}
	}

	if jpegType.maxSize > 0 {
		if len(file.FileData) > jpegType.maxSize {
			byteData, err := resizeImageFromBase64(img, ResizeImageMaxHeigh)
			if err != nil {
				return err
			}
			file.FileData = byteData
		}
	}

	return nil
}

func validatePNG(file *File, pngType MineType) error {
	img, err := png.Decode(bytes.NewReader(file.FileData))
	if err != nil {
		return err
	}

	bounds := img.Bounds()
	if (pngType.maxWidth + pngType.maxHeight) > 0 {
		if bounds.Dx() >= pngType.maxWidth || bounds.Dy() >= pngType.maxHeight {
			return  errors.New("exceed size of file limit")
		}
	}

	if pngType.maxSize > 0 {
		if len(file.FileData) > pngType.maxSize {
			byteData, err := resizeImageFromBase64(img, ResizeImageMaxHeigh)
			if err != nil {
				return err
			}
			file.FileData = byteData
		}
	}

	return nil
}

func validatePDF(file *File, pdfType MineType) error {
	config := pdfModel.NewDefaultConfiguration()
	err := pdfApi.Validate(bytes.NewReader(file.FileData), config)
	if err != nil {
		return err
	}

	if pdfType.maxSize > 0 {
		if len(file.FileData) > pdfType.maxSize {
			return  errors.New("exceed size of file limit")
		}
	}

	return nil
}

// Validate validate image file
func (i *File) Validate(acceptedMineTypes []MineType) error {
	var err error

	checkMark := false
	var acceptedMineType MineType
	for _, item := range acceptedMineTypes {
		if item.name == i.FileType {
			acceptedMineType = item
			checkMark = true
		}
	}
	if !checkMark {
		return errors.New("invalid file type")
	}

	switch acceptedMineType.name {
	case ImageTypeJPEG:
		err = validateJPEG(i, acceptedMineType)
	case ImageTypePNG:
		err = validatePNG(i, acceptedMineType)
	case PDFType:
		err = validatePDF(i, acceptedMineType)
	}

	return err
}

func resizeImageFromBase64(img image.Image, newHeight int) ([]byte, error) {

	// calculator new width of image
	newWidth := newHeight * img.Bounds().Max.X / img.Bounds().Max.Y

	// resize new image
	newImg := imaging.Resize(img, newWidth, newHeight, imaging.Lanczos)

	var buf bytes.Buffer

	err := imaging.Encode(&buf, newImg, imaging.JPEG, imaging.JPEGQuality(75))
	if err != nil {
		return nil, err
	}

	return buf.Bytes(), nil
}
