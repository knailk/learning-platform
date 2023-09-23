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
	FunctionName  string       `json:"function_name"`
	Args          []Arg        `json:"args" gorm:"type:jsonb"`
	AvailableCode string       `json:"available_code"`
	SolutionCode  string       `json:"solution_code"`
	UpdatedAt     time.Time    `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt     time.Time    `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`

	TestCases []TestCase `json:"test_cases" gorm:"foreignKey:ProblemID"`
}

type Arg struct {
	Name  string `json:"name"`
	Type  string `json:"type"`
	Value string `json:"value"`
}

type ProblemLevel string

const (
	ProblemLevelEasy   ProblemLevel = "easy"
	ProblemLevelMedium ProblemLevel = "medium"
	ProblemLevelHard   ProblemLevel = "hard"
)
