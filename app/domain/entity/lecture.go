package entity

import (
	"time"

	uuid "github.com/google/uuid"
)

type Lecture struct {
	ID        uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	LessonID  uuid.UUID `json:"lesson_id"`
	Level     int       `json:"level"`
	Type      string    `json:"type"`
	Content   string    `json:"content"`
	Required  bool      `json:"required"`
	UpdatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
}
