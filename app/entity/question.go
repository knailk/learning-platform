package entity

import (
	"time"

	uuid "github.com/google/uuid"
	"github.com/lib/pq"
)

type Question struct {
	ID            uuid.UUID      `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	LessonID      uuid.UUID      `json:"lesson_id"`
	Order         int            `json:"order"`
	Score         pq.Int64Array  `json:"score" gorm:"type:integer[]"`
	AnswerType    string         `json:"answer_type"`
	AnswerContent pq.StringArray `json:"answer_content" gorm:"type:text[]"`
	Required      bool           `json:"required"`
	UpdatedAt     time.Time      `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt     time.Time      `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
}
