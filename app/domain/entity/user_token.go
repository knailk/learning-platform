package entity

import (
	"time"

	uuid "github.com/google/uuid"
)

type UserToken struct {
	UserID                uuid.UUID  `json:"-"`
	AccessToken           string     `json:"-"`
	AccessTokenExpiresIn  int64      `json:"-"`
	RefreshToken          string     `json:"-"`
	RefreshTokenExpiresIn int64      `json:"-"`
	VerifiedAt            *time.Time `json:"-"`
}
