package models

import (
	"context"
	"errors"

	"github.com/google/uuid"
	"github.com/jinzhu/copier"
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/app/controllers/response"
	"github.com/knailk/learning-platform/app/domain/entity"

	"github.com/knailk/learning-platform/db/postgresql/repository"
	"golang.org/x/crypto/bcrypt"
)

// UserModel ...
type UserModel struct {
	Repo *repository.PostgresRepository
}

var authModel = new(AuthModel)

// Login ...
func (m *UserModel) Login(ctx context.Context, req request.LoginRequest) (user *entity.User, token Token, err error) {
	user, err = m.Repo.User.WithContext(ctx).Where(m.Repo.User.Email.Eq(req.Email)).First()
	if err != nil {
		return user, token, err
	}

	//Compare the password request and database if match
	bytePassword := []byte(req.Password)
	byteHashedPassword := []byte(user.Password)

	err = bcrypt.CompareHashAndPassword(byteHashedPassword, bytePassword)

	if err != nil {
		return user, token, err
	}
	//Generate the JWT auth token
	tokenDetails, err := authModel.CreateToken(user.ID)
	if err != nil {
		return user, token, err
	}

	saveErr := authModel.CreateAuth(user.ID, tokenDetails)
	if saveErr != nil {
		return user, token, saveErr
	}
	token.AccessToken = tokenDetails.AccessToken
	token.RefreshToken = tokenDetails.RefreshToken

	return user, token, nil
}

// Register ...
func (m *UserModel) Register(ctx context.Context, req request.RegisterRequest) (user *entity.User, token Token, err error) {
	//Check if the user exists in database
	checkUser, err := m.Repo.User.WithContext(ctx).Where(m.Repo.User.Email.Eq(req.Email)).Count()
	if err != nil {
		return user, token, err
	}

	if checkUser > 0 {
		return user, token, errors.New("email already exists")
	}

	bytePassword := []byte(req.Password)
	hashedPassword, err := bcrypt.GenerateFromPassword(bytePassword, bcrypt.DefaultCost)
	if err != nil {
		return user, token, err
	}

	user = &entity.User{
		ID:       uuid.New(),
		Email:    req.Email,
		Name:     req.Name,
		Password: string(hashedPassword),
		Age:      req.Age,
		Phone:    req.Phone,
	}

	//Create the user and return back the user ID
	err = m.Repo.User.WithContext(ctx).Create(user)
	if err != nil {
		return user, token, err
	}

	//Generate the JWT auth token
	tokenDetails, err := authModel.CreateToken(user.ID)
	if err != nil {
		return user, token, err
	}

	saveErr := authModel.CreateAuth(user.ID, tokenDetails)
	if saveErr != nil {
		return user, token, saveErr
	}
	token.AccessToken = tokenDetails.AccessToken
	token.RefreshToken = tokenDetails.RefreshToken

	return user, token, err
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
