package repository

import (
	"context"

	cognito "github.com/aws/aws-sdk-go/service/cognitoidentityprovider"
	repoIn "github.com/knailk/learning-platform/app/domain/repository/in/cognito"
)

type CognitoRepository interface {
	SignIn(ctx context.Context, in repoIn.SignIn) (*cognito.AdminInitiateAuthOutput, error)
	SignUp(ctx context.Context, in repoIn.SignUp) (*cognito.SignUpOutput, error)
	ConfirmRegister(ctx context.Context, in repoIn.ConfirmRegister) (*cognito.ConfirmSignUpOutput, error)
	ForgotPassword(ctx context.Context, in repoIn.ForgotPassword) (*cognito.ForgotPasswordOutput, error)
	ChangePassword(ctx context.Context, in repoIn.ChangePassword) (*cognito.ChangePasswordOutput, error)
	ResendConfirmationCode(ctx context.Context, in repoIn.ResendConfirmationCode) (res *cognito.ResendConfirmationCodeOutput, err error)
	ConfirmForgotPassword(ctx context.Context, in repoIn.ConfirmForgotPassword) (*cognito.ConfirmForgotPasswordOutput, error)
}
