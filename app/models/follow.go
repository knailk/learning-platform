package models

import (
	"context"
	"errors"

	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/app/controllers/response"
	"github.com/knailk/learning-platform/app/domain/entity"
	"github.com/knailk/learning-platform/db/postgresql/repository"
	"gorm.io/gen/field"
)

// FollowModel ...
type FollowModel struct {
	Repo *repository.PostgresRepository
}

func (m *FollowModel) CreateFollow(ctx context.Context, req request.Follow) error {
	if req.FollowedID == req.FollowingID {
		return errors.New("cannot follow yourself")
	}
	checkExist, err := m.Repo.Follow.WithContext(ctx).Where(field.Attrs(&entity.Follow{
		FollowedUserID:  req.FollowedID,
		FollowingUserID: req.FollowingID,
	})).Count()
	if err != nil {
		return err
	}

	if checkExist > 0 {
		return errors.New("already followed")
	}

	return m.Repo.Follow.WithContext(ctx).Create(&entity.Follow{
		FollowedUserID:  req.FollowedID,
		FollowingUserID: req.FollowingID,
	})
}

func (m *FollowModel) DeleteFollow(ctx context.Context, req request.Follow) error {
	_, err := m.Repo.Follow.WithContext(ctx).Where(field.Attrs(&entity.Follow{
		FollowedUserID:  req.FollowedID,
		FollowingUserID: req.FollowingID,
	})).Delete()

	return err
}

func (m *FollowModel) GetFollowers(ctx context.Context, userID uuid.UUID) (response.FollowInfo, error) {
	followed, err := m.Repo.User.
		WithContext(ctx).
		LeftJoin(
			m.Repo.Follow,
			m.Repo.Follow.FollowedUserID.EqCol(m.Repo.User.ID)).
		Where(m.Repo.Follow.FollowingUserID.Eq(userID)).Find()
	if err != nil {
		return response.FollowInfo{}, err
	}

	following, err := m.Repo.User.
		WithContext(ctx).
		LeftJoin(
			m.Repo.Follow,
			m.Repo.Follow.FollowingUserID.EqCol(m.Repo.User.ID)).
		Where(m.Repo.Follow.FollowedUserID.Eq(userID)).Find()
	if err != nil {
		return response.FollowInfo{}, err
	}

	return response.FollowInfo{
		FollowedUsers:  followed,
		FollowingUsers: following,
	}, nil
}
