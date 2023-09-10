package entity

import (
	"time"

	"github.com/google/uuid"
)

// Solution represents the "solutions" table in the database.
type Solution struct {
	ID        uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	ProblemID uuid.UUID `json:"problem_id"`
	Code      string    `json:"code"`
	Language  string    `json:"language"`
	UpdatedAt time.Time `json:"-"`
	CreatedAt time.Time `json:"created_at" gorm:"default:CURRENT_TIMESTAMP()"`
}
