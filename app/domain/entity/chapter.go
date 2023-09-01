package entity

import (
	"time"

	uuid "github.com/google/uuid"
)

type Chapter struct {
	ID          uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Level       int       `json:"level"`
	UpdatedAt   time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt   time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`

	Lessons *[]Lesson `json:"lessons,omitempty" gorm:"foreignKey:ChapterID"`
}
