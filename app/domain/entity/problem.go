package entity

import (
	"time"

	"github.com/google/uuid"
)

// Problem represents the "problems" table in the database.
type Problem struct {
	ID            uuid.UUID    `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	Title         string       `json:"title"`
	Description   string       `json:"description"`
	Level         ProblemLevel `json:"level"`
	URL           string       `json:"url" gorm:"unique"`
	AvailableCode string       `json:"available_code"`
	UpdatedAt     time.Time    `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt     time.Time    `json:"created_at" gorm:"default:CURRENT_TIMESTAMP()"`
}

type ProblemLevel string

const (
	ProblemLevelEasy   ProblemLevel = "easy"
	ProblemLevelMedium ProblemLevel = "medium"
	ProblemLevelHard   ProblemLevel = "hard"
)
