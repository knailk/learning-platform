package entity

import (
	"time"

	"github.com/google/uuid"
)

// User ...
type User struct {
	ID            uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	Email         string    `json:"email"`
	Phone         string    `json:"phone"`
	Name          string    `json:"name"`
	Avatar        string    `json:"avatar"`
	Age           int       `json:"age"`
	Score         int       `json:"score"`
	CurrentLesson uuid.UUID `json:"current_lesson"`
	Verified      bool      `json:"-"`
	UpdatedAt     time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt     time.Time `json:"created_at" gorm:"default:CURRENT_TIMESTAMP()"`
}
