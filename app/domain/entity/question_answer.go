package entity

import (
	"time"

	uuid "github.com/google/uuid"
)

type QuestionAnswer struct {
	ID             uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	LessonAnswerID uuid.UUID `json:"lesson_answer_id"`
	QuestionID     uuid.UUID `json:"question_id"`
	Answer         string    `json:"answer"`
	Score          int       `json:"score"`
	UpdatedAt      time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt      time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
}
