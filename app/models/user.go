package models

import (
	"context"

	"github.com/google/uuid"
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

func (m *UserModel) GetRank(ctx context.Context, userID uuid.UUID) (response.Rank, error) {
	users, err := m.Repo.User.WithContext(ctx).Order(m.Repo.User.Score.Desc()).Limit(20).Find()
	if err != nil {
		return nil, err
	}

	res := response.Rank{}

	for i, u := range users {
		numberOfLectures, err := m.Repo.LessonAnswer.WithContext(ctx).
			Where(m.Repo.LessonAnswer.UserID.Eq(u.ID)).
			LeftJoin(m.Repo.Lesson, m.Repo.Lesson.ID.EqCol(m.Repo.LessonAnswer.LessonID)).
			Where(m.Repo.Lesson.Type.Eq("lecture")).
			Count()
		if err != nil {
			return nil, err
		}

		numberOfPractices, err := m.Repo.LessonAnswer.WithContext(ctx).
			Where(m.Repo.LessonAnswer.UserID.Eq(u.ID)).
			LeftJoin(m.Repo.Lesson, m.Repo.Lesson.ID.EqCol(m.Repo.LessonAnswer.LessonID)).
			Where(m.Repo.Lesson.Type.Eq("practice")).
			Count()
		if err != nil {
			return nil, err
		}

		numberOfFollower, err := m.Repo.Follow.WithContext(ctx).Where(m.Repo.Follow.FollowedUserID.Eq(u.ID)).Count()
		if err != nil {
			return nil ,err
		}

		res = append(res, response.UserInfo{
			User:          *u,
			TotalLecture:  numberOfLectures,
			TotalQuestion: numberOfPractices,
			Follower:      numberOfFollower,
			Ranking:       i + 1,
		})

	}
	return res, nil
}
