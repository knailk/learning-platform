package repository

import (
	"fmt"

	"gorm.io/gorm"
)

type PostgresRepository struct {
	*Query
}

// TODO: considering unique instance to avoid race conditions
func NewPostgresRepository(db *gorm.DB) *PostgresRepository {
	fmt.Println("222222222222", db)
	repo := Use(db)
	return &PostgresRepository{
		Query: repo,
	}
}
