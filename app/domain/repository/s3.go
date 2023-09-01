package repository

import (
	"context"

	"github.com/aws/aws-sdk-go/service/s3/s3manager"
	repoIn "github.com/knailk/learning-platform/app/domain/repository/in/s3"
)

// S3Repository is the interface for s3 repository
type S3Repository interface {
	UploadFile(ctx context.Context, in repoIn.UploadFile) (*s3manager.UploadOutput, error)
}
