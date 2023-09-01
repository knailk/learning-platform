package models

import (
	"context"

	"github.com/google/uuid"
	"github.com/jinzhu/copier"
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/app/controllers/response"
	"github.com/knailk/learning-platform/app/domain/entity"

	"github.com/knailk/learning-platform/db/postgresql/repository"
)

// UserModel ...
type UserModel struct {
	Repo *repository.PostgresRepository
}

// One ...
func (m *UserModel) One(ctx context.Context, userID uuid.UUID) (user *entity.User, err error) {
	user, err = m.Repo.User.WithContext(ctx).Where(m.Repo.User.ID.Eq(userID)).First()
	return user, err
}

func (m *UserModel) Update(ctx context.Context, req request.ProfileRequest) (user *entity.User, err error) {
	_, err = m.Repo.User.WithContext(ctx).Where(m.Repo.User.ID.Eq(req.UserID)).Updates(req)
	if err != nil {
		return nil, err
	}
	return
}

func (m *UserModel) GetRank(ctx context.Context) (res response.Rank, err error) {
	users, err := m.Repo.User.WithContext(ctx).Order(m.Repo.User.Score.Desc()).Limit(20).Find()
	if err != nil {
		return nil, err
	}
	copier.Copy(&res, &users)
	return
}
