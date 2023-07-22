package response

import "github.com/google/uuid"

type UserInfo struct {
	ID    uuid.UUID `json:"id"`
	Name  string    `json:"name"`
	Age   int       `json:"age"`
	Score int       `json:"score"`
}

type Rank []UserInfo
