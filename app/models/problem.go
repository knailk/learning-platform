package models

import (
	"context"

	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/domain/entity"
	"github.com/knailk/learning-platform/db/postgresql/repository"
	"gorm.io/gen/field"
)

type ProblemModel struct {
	Repo *repository.PostgresRepository
}

func (m *ProblemModel) Get(ctx context.Context, id uuid.UUID) (*entity.Problem, error) {
	return m.Repo.Problem.WithContext(ctx).Where(m.Repo.Problem.ID.Eq(id)).Preload(m.Repo.Problem.Solution).First()
}

func (m *ProblemModel) List(ctx context.Context, filter entity.Problem) ([]*entity.Problem, error) {
	return m.Repo.Problem.WithContext(ctx).Where(field.Attrs(&filter)).Preload(m.Repo.Problem.Solution).Find()
}
