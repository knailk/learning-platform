package jwt

import (
	"context"
	"time"

	"github.com/knailk/learning-platform/app/config"
	"github.com/knailk/learning-platform/pkg/authjwt"
)

func Init(ctx context.Context, cfg *config.Config) error {

	authjwt.InitJWTSession(&authjwt.Config{
		Secret:          cfg.JWT.AccessSecret,
		AccessTokenExp:  time.Duration(cfg.JWT.AccessTokenExp) * time.Second,
		RefreshTokenExp: time.Duration(cfg.JWT.RefreshTokenExp) * time.Second,
	})

	return nil
}
