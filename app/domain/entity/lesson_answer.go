package entity

import (
	"time"

	uuid "github.com/google/uuid"
)

type LessonAnswer struct {
	ID        uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	UserID    uuid.UUID `json:"user_id"`
	LessonID  uuid.UUID `json:"lesson_id"`
	Score     int       `json:"score"`
	UpdatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`

	QuestionAnswers []QuestionAnswer `json:"question_answers" gorm:"foreignKey:LessonAnswerID"`
}
