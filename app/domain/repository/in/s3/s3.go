package s3

// UploadFile is the input for UploadFile
type UploadFile struct {
	FileType string
	FileData []byte
	FileName string
	FilePath string
	Bucket   string
}
