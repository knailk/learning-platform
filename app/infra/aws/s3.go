package aws

//go:generate mockgen -destination=./mock/mock_$GOFILE -source=$GOFILE -package=mock

import (
	"io"

	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3iface"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

type S3Client interface {
	s3iface.S3API
	Download(w io.WriterAt, input *s3.GetObjectInput, options ...func(*s3manager.Downloader)) (n int64, err error)
	Upload(input *s3manager.UploadInput, options ...func(*s3manager.Uploader)) (*s3manager.UploadOutput, error)
}

type s3Client struct {
	*s3.S3
	*s3manager.Downloader
	*s3manager.Uploader
}

func NewS3Client(sess Session) S3Client {
	client := s3.New(sess)
	return &s3Client{
		S3:         client,
		Downloader: s3manager.NewDownloaderWithClient(client),
		Uploader:   s3manager.NewUploaderWithClient(client),
	}
}
