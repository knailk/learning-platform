package provider

import (
	_redis "github.com/go-redis/redis/v7"
	"github.com/knailk/learning-platform/app/config"
	awsInfra "github.com/knailk/learning-platform/app/infra/aws"
	"gorm.io/gorm"
)

// Provider is the object to bring interface in initialization process
type Provider struct {
	Config        *config.Config
	DB            *gorm.DB
	Redis         *_redis.Client
	CognitoClient awsInfra.CognitoClient
	S3Client      awsInfra.S3Client
	SesClient     awsInfra.SesClient
}
