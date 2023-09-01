package entity

import (
	"time"

	"github.com/google/uuid"
)

type Follow struct {
	FollowingUserID uuid.UUID `json:"following_user_id"`
	FollowedUserID  uuid.UUID `json:"followed_user_id"`
	CreatedAt       time.Time `json:"-"`
	UpdatedAt       time.Time `json:"-"`
}
