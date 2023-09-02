package request

import (
	"encoding/json"

	"github.com/go-playground/validator/v10"
	"github.com/google/uuid"
)


// ------------------------------------------------------//
// LoginRequest ...
type LoginRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=3,max=50"`
}

// RegisterRequest ...
type RegisterRequest struct {
	Name     string `json:"name" binding:"required,min=3,max=30,fullName"` //fullName rule is in validator.go
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=3,max=50"`
	Age      int    `json:"age" binding:"required,min=1,max=100"`
	Phone    string `json:"phone"`
}

// --------------------------------------------------------------------//
type ConfirmRegister struct {
	Email         string `json:"email"`
	ConfirmationCode string `json:"confirmation_code"`
}

type ForgotPassword struct {
	Email string `json:"email"`
}

type ChangePassword struct {
	UserID           uuid.UUID `json:"-"`
	PreviousPassword string    `json:"previous_password"`
	ProposedPassword string    `json:"proposed_password"`
}

type ResendConfirmationCode struct {
	Email string `json:"email"`
}
type ConfirmForgotPassword struct {
	Email             string `json:"email"`
	ConfirmationCode     string `json:"confirmation_code"`
	ConfirmationPassword string `json:"confirmation_password"`
}

// --------------------------------------------------------------------//
// Auth ...
type AuthRequest struct{}

// Name ...
func (f AuthRequest) Name(tag string, errMsg ...string) (message string) {
	switch tag {
	case "required":
		if len(errMsg) == 0 {
			return "Please enter your name"
		}
		return errMsg[0]
	case "min", "max":
		return "Your name should be between 3 to 30 characters"
	case "fullName":
		return "Name should not include any special characters or numbers"
	default:
		return "Something went wrong, please try again later"
	}
}

// Email ...
func (f AuthRequest) Email(tag string, errMsg ...string) (message string) {
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
func (f AuthRequest) Password(tag string) (message string) {
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
func (f AuthRequest) Age(tag string) (message string) {
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
func (f AuthRequest) Login(err error) string {
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
func (f AuthRequest) Register(err error) string {
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
