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

type UpdateAvatarRequest struct {
	UserID   uuid.UUID `json:"-"`

	FileData string `json:"file_data"`
	FileName string `json:"file_name"`
}
