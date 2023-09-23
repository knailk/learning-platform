package entity

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
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
	Args          Args         `json:"args" gorm:"type:jsonb"`
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

type Args []Arg

func (a Args) Value() (driver.Value, error) {
	return json.Marshal(a)
}

// Make the Attrs struct implement the sql.Scanner interface. This method
// simply decodes a JSON-encoded value into the struct fields.
func (a *Args) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion to []byte failed")
	}

	return json.Unmarshal(b, &a)
}


type ProblemLevel string

const (
	ProblemLevelEasy   ProblemLevel = "easy"
	ProblemLevelMedium ProblemLevel = "medium"
	ProblemLevelHard   ProblemLevel = "hard"
)
