package aws

import (
	"context"
	"fmt"

	"github.com/knailk/learning-platform/app/config"
	awsInfra "github.com/knailk/learning-platform/app/infra/aws"
)

func Init(ctx context.Context,
	cfg *config.Config,
) (awsInfra.CognitoClient, awsInfra.S3Client, awsInfra.SesClient, error) {
	auth, err := awsInfra.NewSession(&cfg.AWS)
	if err != nil {
		return nil, nil, nil, fmt.Errorf("aws auth initialize: %w", err)
	}

	return awsInfra.NewCognitoClient(auth), awsInfra.NewS3Client(auth), awsInfra.NewSesClient(auth), nil
}
