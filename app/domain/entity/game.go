package entity

import (
	"time"

	"github.com/google/uuid"
)

type Game struct {
	ID        uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	Title     string    `json:"title"`
	Level     int       `json:"level"`
	Score     int       `json:"score"`
	UpdatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt time.Time `json:"created_at" gorm:"default:CURRENT_TIMESTAMP()"`
}
