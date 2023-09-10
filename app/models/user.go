package models

import (
	"context"

	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/app/controllers/response"
	"github.com/knailk/learning-platform/app/domain/entity"
	aws "github.com/knailk/learning-platform/app/domain/repository"
	"github.com/knailk/learning-platform/app/domain/repository/in/s3"
	utils "github.com/knailk/learning-platform/app/utils/image.go"

	"github.com/knailk/learning-platform/db/postgresql/repository"
)

// UserModel ...
type UserModel struct {
	Repo   *repository.PostgresRepository
	S3Repo aws.S3Repository
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

func (m *UserModel) GetRank(ctx context.Context, userID uuid.UUID) ([]*entity.User, error) {
	users, err := m.Repo.User.WithContext(ctx).Order(m.Repo.User.Score.Desc()).Limit(10).Find()
	if err != nil {
		return nil, err
	}

	return users, nil
}

func (m *UserModel) GetUserInfo(ctx context.Context, userID uuid.UUID) (response.UserInfo, error) {
	return m.Repo.User.WithContext(ctx).GetUserInfoByID(userID)
}

func (m *UserModel) UpdateAvatar(ctx context.Context, req request.UpdateAvatarRequest) (user *entity.User, err error) {
	imageDataFile, err := utils.NewFileData(req.FileData, req.FileName, utils.AvatarMineTypes)
	if err != nil {
		return nil, err
	}

	uploadFileRes, err := m.S3Repo.UploadFile(ctx, s3.UploadFile{
		FileType: imageDataFile.FileType,
		FileData: imageDataFile.FileData,
		FileName: imageDataFile.FileName,
		Bucket:   "learning-platform-bucket",
	})
	if err != nil {
		return nil, err
	}

	_, err = m.Repo.User.WithContext(ctx).
		Where(m.Repo.User.ID.Eq(req.UserID)).
		Updates(entity.User{
			Avatar: uploadFileRes.Location,
		})
	if err != nil {
		return nil, err
	}

	return m.Repo.User.WithContext(ctx).Where(m.Repo.User.ID.Eq(req.UserID)).First()
}
