package request

import (
	"encoding/json"

	"github.com/go-playground/validator/v10"
	"github.com/google/uuid"
)

// UserRequest ...
type UserRequest struct{}

// LoginRequest ...
type LoginRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=3,max=50"`
}

// RegisterRequest ...
type RegisterRequest struct {
	Name     string `json:"name" binding:"required,min=3,max=20,fullName"` //fullName rule is in validator.go
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=3,max=50"`
	Age      int    `json:"age" binding:"required,min=1,max=100"`
	Phone    string `json:"phone"`
}

type ProfileRequest struct {
	UserID   uuid.UUID `json:"user_id"`
	Name     string    `json:"name" binding:"required,min=3,max=20,fullName"` //fullName rule is in validator.go
	// Password string    `json:"password" binding:"required,min=3,max=50"` // can't update password
	Age      int       `json:"age" binding:"required,min=1,max=100"`
	Phone    string    `json:"phone"`
}

// Name ...
func (f UserRequest) Name(tag string, errMsg ...string) (message string) {
	switch tag {
	case "required":
		if len(errMsg) == 0 {
			return "Please enter your name"
		}
		return errMsg[0]
	case "min", "max":
		return "Your name should be between 3 to 20 characters"
	case "fullName":
		return "Name should not include any special characters or numbers"
	default:
		return "Something went wrong, please try again later"
	}
}

// Email ...
func (f UserRequest) Email(tag string, errMsg ...string) (message string) {
	switch tag {
	case "required":
		if len(errMsg) == 0 {
			return "Please enter your email"
		}
		return errMsg[0]
	case "min", "max", "email":
		return "Please enter a valid email"
	default:
		return "Something went wrong, please try again later"
	}
}

// Password ...
func (f UserRequest) Password(tag string) (message string) {
	switch tag {
	case "required":
		return "Please enter your password"
	case "min", "max":
		return "Your password should be between 3 and 50 characters"
	case "eqfield":
		return "Your passwords does not match"
	default:
		return "Something went wrong, please try again later"
	}
}

// Age ...
func (f UserRequest) Age(tag string) (message string) {
	switch tag {
	case "required":
		return "Please enter your Age"
	case "min", "max":
		return "Your Age should be between 3 and 100 characters"
	default:
		return "Something went wrong, please try again later"
	}
}

// Signin ...
func (f UserRequest) Login(err error) string {
	switch err.(type) {
	case validator.ValidationErrors:

		if _, ok := err.(*json.UnmarshalTypeError); ok {
			return "Something went wrong, please try again later"
		}

		for _, err := range err.(validator.ValidationErrors) {
			if err.Field() == "Email" {
				return f.Email(err.Tag())
			}
			if err.Field() == "Password" {
				return f.Password(err.Tag())
			}
		}

	default:
		return "Invalid request"
	}

	return "Something went wrong, please try again later"
}

// Register ...
func (f UserRequest) Register(err error) string {
	switch err.(type) {
	case validator.ValidationErrors:

		if _, ok := err.(*json.UnmarshalTypeError); ok {
			return "Something went wrong, please try again later"
		}

		for _, err := range err.(validator.ValidationErrors) {
			if err.Field() == "Name" {
				return f.Name(err.Tag())
			}

			if err.Field() == "Email" {
				return f.Email(err.Tag())
			}

			if err.Field() == "Password" {
				return f.Password(err.Tag())
			}

			if err.Field() == "Password" {
				return f.Password(err.Tag())
			}
		}
	default:
		return "Invalid request"
	}

	return "Something went wrong, please try again later"
}
