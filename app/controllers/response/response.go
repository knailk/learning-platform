package response

import "github.com/knailk/learning-platform/app/domain/entity"

type FollowInfo struct {
	FollowedUsers  []*entity.User `json:"followed_users"`
	FollowingUsers []*entity.User `json:"following_users"`
}
