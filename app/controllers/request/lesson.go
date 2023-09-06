package request

import (
	"time"

	"github.com/google/uuid"
)

type LessonAnswerRequest struct {
	ChapterID uuid.UUID `json:"chapter_id"`
	Name      string    `json:"name"`
	Type      string    `json:"type"` // practice or lecture
	Level     int       `json:"level"`
	Score     int       `json:"score"`
	UpdatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
}