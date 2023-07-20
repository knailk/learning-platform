package entity

import (
	"time"

	uuid "github.com/google/uuid"
	"github.com/lib/pq"
)

type Lesson struct {
	ID        uuid.UUID      `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	ChapterID uuid.UUID      `json:"chapter_id"`
	Name      string         `json:"name"`
	Score     int            `json:"score"`
	Tags      pq.StringArray `json:"tags" gorm:"type:text[]"`
	UpdatedAt time.Time      `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt time.Time      `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
}
