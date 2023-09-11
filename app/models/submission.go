package models

import (
	"context"

	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/domain/entity"
	"github.com/knailk/learning-platform/db/postgresql/repository"
)

type SubmissionModel struct {
	Repo *repository.PostgresRepository
}

func (m *SubmissionModel) GetMostRecent(ctx context.Context, userID uuid.UUID) (*entity.Submission, error) {
	return m.Repo.Submission.
		WithContext(ctx).
		Where(m.Repo.Submission.UserID.Eq(userID)).
		Order(m.Repo.Submission.CreatedAt.Desc()).
		First()
}

func (m *SubmissionModel) Get(ctx context.Context, id uuid.UUID) (*entity.Submission, error) {
	return m.Repo.Submission.
		WithContext(ctx).
		Where(m.Repo.Submission.ID.Eq(id)).
		First()
}

func (m *SubmissionModel) ListByUserID(ctx context.Context, userID uuid.UUID) ([]*entity.Submission, error) {
	return m.Repo.Submission.
		WithContext(ctx).
		Where(m.Repo.Submission.UserID.Eq(userID)).
		Find()
}

func (m *SubmissionModel) Create(ctx context.Context, submission entity.Submission) error {
	return m.Repo.Submission.WithContext(ctx).Create(&submission)
}
