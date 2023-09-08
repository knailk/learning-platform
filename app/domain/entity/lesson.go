package entity

import (
	"time"

	uuid "github.com/google/uuid"
)

type Lesson struct {
	ID        uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	ChapterID uuid.UUID `json:"chapter_id"`
	Name      string    `json:"name"`
	Type      string    `json:"type"` // practice or lecture
	Level     int       `json:"level"`
	Score     int       `json:"score"`
	UpdatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`

	Questions []Question `json:"questions" gorm:"foreignKey:LessonID"`
	Lectures  []Lecture  `json:"lectures" gorm:"foreignKey:LessonID"`
}
