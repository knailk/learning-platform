package config

import (
	"errors"
	"fmt"
	"os"

	"github.com/jinzhu/configor"
)

const (
	EnvLocal       = "local"
	EnvDevelopment = "development"
	EnvStaging     = "staging"
	EnvProduction  = "production"
)

type Config struct {
	Env        string        `yaml:"env" env:"ENV" default:"development"`
	SSL        bool          `yaml:"ssl" env:"SSL" default:"false"`
	APIVersion string        `yaml:"api_version" env:"API_VERSION"`
	Port       string        `yaml:"port" env:"PORT" default:"8080"`
	DB         DBPostgresCnf `yaml:"db"`
	Redis      RedisCnf      `yaml:"redis"`
	AWS        AWSCnf        `yaml:"aws"`
	JWT        JWTCnf        `yaml:"jwt"`
}

type DBPostgresCnf struct {
	Host     string `yaml:"host" env:"DB_HOST"`
	User     string `yaml:"user" env:"DB_USER"`
	Password string `yaml:"password" env:"DB_PASS"`
	DBName   string `yaml:"db_name" env:"DB_NAME"`
}

type RedisCnf struct {
	Host     string `yaml:"host" env:"REDIS_HOST"`
	Password string `yaml:"password" env:"REDIS_PASSWORD"`
	Secret   string `yaml:"secret" env:"REDIS_SECRET"`
}

type AWSCnf struct {
	AccessKeyId     string     `yaml:"access_key_id" env:"SM_AWS_ACCESS_KEY_ID"`
	SecretAccessKey string     `yaml:"secret_access_key" env:"SM_AWS_SECRET_ACCESS_KEY"`
	Endpoint        string     `yaml:"endpoint" env:"SM_AWS_ENDPOINT"`
	Region          string     `yaml:"region" env:"SM_AWS_REGION"`
	Cognito         CognitoCnf `yaml:"cognito"`
	S3              S3Cnf      `yaml:"s3"`
}

type CognitoCnf struct {
	UserPoolID      string `yaml:"cognito_user_pool_id" env:"SM_AWS_COGNITO_USER_POOL_ID"`
	AppClientID     string `yaml:"cognito_app_client_id" env:"SM_AWS_COGNITO_APP_CLIENT_ID"`
	AppClientSecret string `yaml:"cognito_app_client_secret" env:"SM_AWS_COGNITO_APP_CLIENT_SECRET"`
}

type S3Cnf struct {
	BucketUserAssets      string `yaml:"bucket_user_assets" env:"SM_AWS_S3_BUCKET_USER_ASSETS"`
	BucketSoftenmindAsset string `yaml:"bucket_softenmind_assets" env:"SM_AWS_S3_BUCKET_SOFTENMIND_ASSETS"`
}

type JWTCnf struct {
	AccessSecret    string `yaml:"access_secret" env:"ACCESS_SECRET"`
	RefreshSecret   string `yaml:"refresh_secret" env:"REFERSH_SECRET"`
	AccessTokenExp  int64  `yaml:"access_token_exp" env:"SESSION_JWT_ACCESS_TOKEN_EXP" default:"43200"`   // 12h
	RefreshTokenExp int64  `yaml:"refresh_token_exp" env:"SESSION_JWT_REFRESH_TOKEN_EXP" default:"86400"` // 24h
}

// loadConfigAs to load config of specified struct
func loadConfigAs(config interface{}, path string) error {
	// configor doesn't check file existence
	if _, err := os.Stat(path); errors.Is(err, os.ErrNotExist) {
		return fmt.Errorf("config file not exist %s: %w", path, err)
	}

	err := configor.Load(config, path)
	if err != nil {
		return fmt.Errorf("failed to load config file %s: %w", path, err)
	}
	return nil
}

// LoadConfig to load config of type Config
func LoadConfig(path string) (*Config, error) {
	config := Config{}
	err := loadConfigAs(&config, path)
	if err != nil {
		return nil, err
	}
	return &config, nil
}
