package request

import (
	"github.com/google/uuid"
)

// UserRequest ...
type ProfileRequest struct {
	UserID uuid.UUID `json:"-"`
	Name   string    `json:"name"`
	Age    int       `json:"age"`
	Phone  string    `json:"phone"`
}
