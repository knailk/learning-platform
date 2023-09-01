package models

import (
	"context"

	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/domain/entity"

	"github.com/knailk/learning-platform/db/postgresql/repository"
)

type ChapterModel struct {
	Repo *repository.PostgresRepository
}

func (m *ChapterModel) List(ctx context.Context) ([]*entity.Chapter, error) {
	return m.Repo.Chapter.WithContext(ctx).
		Order(m.Repo.Chapter.Level).
		Preload(m.Repo.Chapter.Lessons.Order(m.Repo.Lesson.Level)).
		// Preload(m.Repo.Chapter.Lessons.Questions).
		Find()
}

func (m *ChapterModel) Get(ctx context.Context, id uuid.UUID) (*entity.Chapter, error) {
	return m.Repo.Chapter.WithContext(ctx).Where(m.Repo.Chapter.ID.Eq(id)).
		Preload(m.Repo.Chapter.Lessons).
		// Preload(m.Repo.Chapter.Lessons.Questions).
		First()
}
