package main

import (
	"context"
	"fmt"
	"log"

	"github.com/joho/godotenv"
	"github.com/knailk/learning-platform/app/api"
	"github.com/knailk/learning-platform/app/config"
	"github.com/knailk/learning-platform/app/infra/provider"
	"github.com/knailk/learning-platform/cmd/aws"
	"github.com/knailk/learning-platform/cmd/jwt"
	"github.com/knailk/learning-platform/db"

	"github.com/gin-gonic/gin"
)

func main() {
	ctx := context.Background()

	err := godotenv.Load()
	if err != nil {
		panic(fmt.Sprintf("failed to load .env by error: %v", err))
	}

	cfg, err := config.LoadConfig("development/config.development.yaml")
	if err != nil {
		log.Fatal("error: failed to load config")
	}

	if cfg.Env == "PRODUCTION" {
		gin.SetMode(gin.ReleaseMode)
	}

	provider := &provider.Provider{Config: cfg}

	//Start PostgreSQL database
	provider.DB = db.Init(cfg)

	//Start Redis on database 1 - it's used to store the JWT but you can use it for anything else
	//Example: db.GetRedis().Set(KEY, VALUE, at.Sub(now)).Err()
	provider.Redis = db.InitRedis(1)

	provider.CognitoClient, provider.S3Client, provider.SesClient, err = aws.Init(ctx, cfg)
	if err != nil {
		log.Fatal(err, "initialize aws auth")
		return
	}

	if err = jwt.Init(ctx, cfg); err != nil {
		log.Fatal(err, "initialize auth jwt")
		return
	}

	r, err := api.Handler(ctx, provider)
	if err != nil {
		return
	}

	port := cfg.Port

	log.Printf("\n\n PORT: %s \n ENV: %s \n SSL: %v \n Version: %s \n\n", port, cfg.Env, cfg.SSL, cfg.APIVersion)

	if cfg.SSL {

		SSLKeys := &struct {
			CERT string
			KEY  string
		}{
			CERT: "./app/cert/CA/localhost/localhost.crt",
			KEY:  "./app/cert/CA/localhost/localhost.decrypted.key",
		}

		r.RunTLS(":"+port, SSLKeys.CERT, SSLKeys.KEY)
	} else {
		r.Run(":" + port)
	}

}
