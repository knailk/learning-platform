package aws

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/client"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"

	"github.com/knailk/learning-platform/app/config"
)

type Session interface {
	client.ConfigProvider
}

// NewSession returns a new aws auth with config
func NewSession(cfg *config.AWSCnf) (Session, error) {
	return session.Must(session.NewSessionWithOptions(session.Options{
		Config: aws.Config{
			Credentials:      credentials.NewStaticCredentials(cfg.AccessKeyId, cfg.SecretAccessKey, ""),
			Region:           aws.String(cfg.Region),
			S3ForcePathStyle: aws.Bool(true),
			Endpoint:         aws.String(cfg.Endpoint),
		},
	})), nil
}
