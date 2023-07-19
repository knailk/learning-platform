package models

import (
	"time"

	uuid "github.com/google/uuid"
)

type Rank struct {
	ID        uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	UserID    uuid.UUID `json:"user_id"`
	Before    int       `json:"before"`
	UpdatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt time.Time `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
}

// RankModel ...
type RankModel struct {
	// repo *repository.PostgresRepository
}
