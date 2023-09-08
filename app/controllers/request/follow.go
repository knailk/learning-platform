package request

import "github.com/google/uuid"

type Follow struct {
	FollowingID uuid.UUID `json:"-"`
	FollowedID  uuid.UUID `json:"followed_id"`
}
