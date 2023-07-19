package repository

import (
	"gorm.io/gorm"
)

type PostgresRepository struct {
	*Query
}

// TODO: considering unique instance to avoid race conditions
func NewPostgresRepository(db *gorm.DB) *PostgresRepository {
	repo := Use(db)
	return &PostgresRepository{
		Query: repo,
	}
}
