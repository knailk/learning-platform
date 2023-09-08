package request

import (
	"github.com/google/uuid"
)

// UserRequest ...
type ProfileRequest struct {
	UserID uuid.UUID `json:"-"`
	Name   string    `json:"name"`
	Birth  string    `json:"birth"`
	Phone  string    `json:"phone"`
}
