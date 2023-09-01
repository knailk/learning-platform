package entity

import (
	"time"

	"github.com/google/uuid"
)

// User ...
type User struct {
	ID        uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	Email     string    `json:"email"`
	Phone     string    `json:"phone"`
	Name      string    `json:"name"`
	Age       int       `json:"age"`
	Score     int       `json:"score"`
	Password  string    `json:"-"`
	UpdatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
}
