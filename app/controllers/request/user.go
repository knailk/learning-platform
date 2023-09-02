package request

import (
	"github.com/google/uuid"
)

// UserRequest ...
type ProfileRequest struct {
	UserID uuid.UUID `json:"user_id"`
	Name   string    `json:"name" binding:"required,min=3,max=20,fullName"` //fullName rule is in validator.go
	// Password string    `json:"password" binding:"required,min=3,max=50"` // can't update password
	Age   int    `json:"age" binding:"required,min=1,max=100"`
	Phone string `json:"phone"`
}
