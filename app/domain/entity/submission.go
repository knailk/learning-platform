package entity

import (
	"time"

	"github.com/google/uuid"
)

// Submission represents the "submissions" table in the database.
type Submission struct {
	ID         uuid.UUID        `json:"id" gorm:"type:uuid;primary_key"`
	UserID     uuid.UUID        `json:"user_id"`
	ProblemID  uuid.UUID        `json:"problem_id"`
	SolutionID uuid.UUID        `json:"solution_id"`
	Status     SubmissionStatus `json:"status"`
	Time       float64          `json:"time"`
	Memory     float64          `json:"memory"`
	UpdatedAt  time.Time        `json:"-"`
	CreatedAt  time.Time        `json:"created_at" gorm:"default:CURRENT_TIMESTAMP()"`
}

type SubmissionStatus string

const (
	SubmissionStatusAccepted SubmissionStatus = "Accepted"
	SubmissionStatusWrong    SubmissionStatus = "Wrong Answer"
	SubmissionStatusTime     SubmissionStatus = "Time Limit Exceeded"
	SubmissionStatusRuntime  SubmissionStatus = "Runtime Error"
)
