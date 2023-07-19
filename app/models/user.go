package models

import (
	"context"
	"errors"

	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/app/entity"

	"github.com/knailk/learning-platform/db/postgresql/repository"
	"golang.org/x/crypto/bcrypt"
)

// UserModel ...
type UserModel struct {
	Repo *repository.PostgresRepository
}

var authModel = new(AuthModel)

// Login ...
func (m UserModel) Login(ctx context.Context, request request.LoginRequest) (user *entity.User, token Token, err error) {
	// err = db.GetDB().SelectOne(&user, "SELECT id, email, password, name, updated_at, created_at FROM public.user WHERE email=LOWER($1) LIMIT 1", request.Email)

	user, err = m.Repo.User.WithContext(ctx).Where(m.Repo.User.Email.Eq(request.Email)).First()
	if err != nil {
		return user, token, err
	}

	//Compare the password request and database if match
	bytePassword := []byte(request.Password)
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
func (m UserModel) Register(ctx context.Context, request request.RegisterRequest) (user *entity.User, err error) {
	//Check if the user exists in database
	checkUser, err := m.Repo.User.WithContext(ctx).Where(m.Repo.User.Email.Eq(request.Email)).Count()
	if err != nil {
		return user, err
	}

	if checkUser > 0 {
		return user, errors.New("email already exists")
	}

	bytePassword := []byte(request.Password)
	hashedPassword, err := bcrypt.GenerateFromPassword(bytePassword, bcrypt.DefaultCost)
	if err != nil {
		return user, err
	}

	//Create the user and return back the user ID
	// err = getDb.QueryRow("INSERT INTO public.user(email, password, name) VALUES($1, $2, $3) RETURNING id", request.Email, string(hashedPassword), request.Name).Scan(&user.ID)
	err = m.Repo.User.WithContext(ctx).Create(&entity.User{
		ID:       uuid.New(),
		Email:    request.Email,
		Name:     request.Name,
		Password: string(hashedPassword),
	})
	if err != nil {
		return user, err
	}

	user.Name = request.Name
	user.Email = request.Email

	return user, err
}

// One ...
func (m UserModel) One(ctx context.Context, userID uuid.UUID) (user *entity.User, err error) {
	user, err = m.Repo.User.WithContext(ctx).Where(m.Repo.User.ID.Eq(userID)).First()
	return user, err
}
