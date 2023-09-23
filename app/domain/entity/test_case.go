package entity

import (
	"time"

	"github.com/google/uuid"
)

type TestCase struct {
	ID        uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	ProblemID uuid.UUID `json:"problem_id"`
	Input     Args     `json:"input" gorm:"type:jsonb"`

	UpdatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt time.Time `json:"created_at" gorm:"default:CURRENT_TIMESTAMP()"`
}
