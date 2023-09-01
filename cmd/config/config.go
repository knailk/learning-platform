package config

import (
	"context"

	"github.com/knailk/learning-platform/app/config"
)

const (
	// defaultConfigFile default config file path
	defaultConfigFile = "development/config.{{env}}.yaml"
)

func Init(ctx context.Context) (*config.Config, error) {
	// TODO: because having only one env for dev
	// confFilepath := flag.String("c", "", "configuration file for app")
	// flag.Parse()

	// // If no config file passed in, then check the ENV var
	// // and select the default config file for the env
	// if confFilepath == nil || *confFilepath == "" {
	// 	env := os.Getenv("ENV")
	// 	if env == "" {
	// 		return nil, ErrNoConfig
	// 	}
	// 	if env == config.EnvLocal {
	// 		err := godotenv.Load()
	// 		if err != nil {
	// 			panic(fmt.Sprintf("failed to load .env by error: %v", err))
	// 		}
	// 	}
	// 	filepath := strings.ReplaceAll(defaultConfigFile, "{{env}}", env)
	// 	confFilepath = &filepath
	// }

	conf, err := config.LoadConfig("development/config.development.yaml")
	return conf, err
}
