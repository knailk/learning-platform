package response

import (
	"github.com/knailk/learning-platform/app/domain/entity"
)

type UserInfo struct {
	entity.User
	Follower      int64 `json:"follower"`
	TotalLecture  int64 `json:"total_lecture"`
	TotalQuestion int64 `json:"total_question"`
	Ranking       int   `json:"ranking"`
	Following     bool  `json:"following"`
	Followed      bool  `json:"followed"`
}

type Rank []UserInfo
