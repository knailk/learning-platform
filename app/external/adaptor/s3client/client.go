package s3client

import (
	"bytes"
	"context"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
	"github.com/knailk/learning-platform/app/config"
	"github.com/knailk/learning-platform/app/domain/repository"
	repoIn "github.com/knailk/learning-platform/app/domain/repository/in/s3"
	awsInfra "github.com/knailk/learning-platform/app/infra/aws"
	"github.com/knailk/learning-platform/pkg/log"
)

type s3Repository struct {
	client awsInfra.S3Client
	bucket config.S3Cnf
}

func NewS3Repository(client awsInfra.S3Client, config *config.Config) repository.S3Repository {
	return &s3Repository{
		client: client,
		bucket: config.AWS.S3,
	}
}

func (r *s3Repository) UploadFile(ctx context.Context, in repoIn.UploadFile) (*s3manager.UploadOutput, error) {
	upInput := &s3manager.UploadInput{
		Bucket:      aws.String(in.Bucket + in.FilePath),
		Body:        bytes.NewBuffer(in.FileData),
		Key:         aws.String(in.FileName),
		ContentType: aws.String(in.FileType),
	}

	res, err := r.client.Upload(upInput)
	if err != nil {
		return nil, err
	}

	log.Info("Upload Avatar success ", res.Location)
	return res, nil
}
