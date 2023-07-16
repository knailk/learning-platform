package models

import (
	"errors"
	"time"

	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/db"

	"golang.org/x/crypto/bcrypt"
)

// User ...
type User struct {
	ID        uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	Email     string    `json:"email"`
	Phone     string    `json:"phone"`
	Name      string    `json:"name"`
	Age       int       `json:"age"`
	Password  string    `json:"-"`
	UpdatedAt time.Time     `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
	CreatedAt time.Time     `json:"-" gorm:"default:CURRENT_TIMESTAMP()"`
}

// UserModel ...
type UserModel struct{}

var authModel = new(AuthModel)

// Login ...
func (m UserModel) Login(request request.LoginRequest) (user User, token Token, err error) {

	err = db.GetDB().SelectOne(&user, "SELECT id, email, password, name, updated_at, created_at FROM public.user WHERE email=LOWER($1) LIMIT 1", request.Email)

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
func (m UserModel) Register(request request.RegisterRequest) (user User, err error) {
	getDb := db.GetDB()

	//Check if the user exists in database
	checkUser, err := getDb.SelectInt("SELECT count(id) FROM public.user WHERE email=LOWER($1) LIMIT 1", request.Email)
	if err != nil {
		return user, errors.New("something went wrong, please try again later")
	}

	if checkUser > 0 {
		return user, errors.New("email already exists")
	}

	bytePassword := []byte(request.Password)
	hashedPassword, err := bcrypt.GenerateFromPassword(bytePassword, bcrypt.DefaultCost)
	if err != nil {
		return user, errors.New("something went wrong, please try again later")
	}

	//Create the user and return back the user ID
	err = getDb.QueryRow("INSERT INTO public.user(email, password, name) VALUES($1, $2, $3) RETURNING id", request.Email, string(hashedPassword), request.Name).Scan(&user.ID)
	if err != nil {
		return user, errors.New("something went wrong, please try again later")
	}

	user.Name = request.Name
	user.Email = request.Email

	return user, err
}

// One ...
func (m UserModel) One(userID int64) (user User, err error) {
	err = db.GetDB().SelectOne(&user, "SELECT id, email, name FROM public.user WHERE id=$1 LIMIT 1", userID)
	return user, err
}
