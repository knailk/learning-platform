package entity

import (
	"time"

	uuid "github.com/google/uuid"
	"github.com/lib/pq"
)

type Question struct {
	ID            uuid.UUID      `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	LessonID      uuid.UUID      `json:"lesson_id"`
	QuestionContent string         `json:"question_content"`
	AnswerContent pq.StringArray `json:"answer_content" gorm:"type:text[]"`
	Score         pq.Int64Array  `json:"score" gorm:"type:integer[]"`
	AnswerType    string         `json:"answer_type"`
	Level         int            `json:"level"`
	Required      bool           `json:"required"`
	UpdatedAt     time.Time      `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt     time.Time      `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
}
