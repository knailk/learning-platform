package request

import "github.com/google/uuid"

type Follow struct {
	FollowingID uuid.UUID `json:"following_id"`
	FollowedID  uuid.UUID `json:"followed_id"`
}
