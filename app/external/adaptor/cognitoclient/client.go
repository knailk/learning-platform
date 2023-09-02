package cognitoclient

import (
	"context"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"

	"github.com/aws/aws-sdk-go/aws"
	cognito "github.com/aws/aws-sdk-go/service/cognitoidentityprovider"
	"github.com/knailk/learning-platform/app/config"
	"github.com/knailk/learning-platform/app/domain/repository"
	repoIn "github.com/knailk/learning-platform/app/domain/repository/in/cognito"
	awsInfra "github.com/knailk/learning-platform/app/infra/aws"
	"github.com/knailk/learning-platform/pkg/log"
)

const flowUsernamePassword = "ADMIN_USER_PASSWORD_AUTH"

type cognitoRepository struct {
	client          awsInfra.CognitoClient
	UserPoolID      string
	AppClientID     string
	AppClientSecret string
}

func NewCognitoRepository(client awsInfra.CognitoClient, config *config.Config) repository.CognitoRepository {
	return &cognitoRepository{
		client:          client,
		UserPoolID:      config.AWS.Cognito.UserPoolID,
		AppClientID:     config.AWS.Cognito.AppClientID,
		AppClientSecret: config.AWS.Cognito.AppClientSecret,
	}
}

func (r cognitoRepository) SignUp(ctx context.Context, in repoIn.SignUp) (res *cognito.SignUpOutput, err error) {
	user := &cognito.SignUpInput{
		Username:   aws.String(in.Username),
		Password:   aws.String(in.Password),
		ClientId:   aws.String(r.AppClientID),
		SecretHash: aws.String(computeSecretHash(r.AppClientSecret, in.Username, r.AppClientID)),
	}

	res, err = r.client.SignUp(user)
	if err != nil {
		return nil, err
	}

	log.Info("Initiate success", res.String())
	return res, nil
}

func (r cognitoRepository) ConfirmRegister(ctx context.Context, in repoIn.ConfirmRegister) (res *cognito.ConfirmSignUpOutput, err error) {
	input := &cognito.ConfirmSignUpInput{
		ClientId:         aws.String(r.AppClientID),
		Username:         aws.String(in.Username),
		ConfirmationCode: aws.String(in.ConfirmationCode),
		SecretHash:       aws.String(computeSecretHash(r.AppClientSecret, in.Username, r.AppClientID)),
	}

	res, err = r.client.ConfirmSignUp(input)
	if err != nil {
		return nil, err
	}

	log.Info("Confirm sign up success", res.String())
	return res, nil
}

func (r cognitoRepository) ForgotPassword(ctx context.Context, in repoIn.ForgotPassword) (res *cognito.ForgotPasswordOutput, err error) {
	input := &cognito.ForgotPasswordInput{
		ClientId:   aws.String(r.AppClientID),
		Username:   aws.String(in.Username),
		SecretHash: aws.String(computeSecretHash(r.AppClientSecret, in.Username, r.AppClientID)),
	}

	res, err = r.client.ForgotPassword(input)
	if err != nil {
		return nil, err
	}

	log.Info("Request reset password success", res.String())
	return res, nil
}

func (r cognitoRepository) ChangePassword(ctx context.Context, in repoIn.ChangePassword) (res *cognito.ChangePasswordOutput, err error) {
	input := &cognito.ChangePasswordInput{
		AccessToken:      aws.String(in.AccessToken),
		PreviousPassword: aws.String(in.PreviousPassword),
		ProposedPassword: aws.String(in.ProposedPassword),
	}

	res, err = r.client.ChangePassword(input)
	if err != nil {
		return nil, err
	}

	log.Info("Request reset password success", res.String())
	return res, nil
}

func (r cognitoRepository) ResendConfirmationCode(ctx context.Context, in repoIn.ResendConfirmationCode) (res *cognito.ResendConfirmationCodeOutput, err error) {
	input := &cognito.ResendConfirmationCodeInput{
		ClientId:   aws.String(r.AppClientID),
		Username:   aws.String(in.Username),
		SecretHash: aws.String(computeSecretHash(r.AppClientSecret, in.Username, r.AppClientID)),
	}

	res, err = r.client.ResendConfirmationCodeWithContext(ctx, input)
	if err != nil {
		return nil, err
	}

	log.Info("Resend confirmation code success", res.String())
	return res, nil
}

func (r cognitoRepository) ConfirmForgotPassword(ctx context.Context, in repoIn.ConfirmForgotPassword) (res *cognito.ConfirmForgotPasswordOutput, err error) {
	input := &cognito.ConfirmForgotPasswordInput{
		ClientId:         aws.String(r.AppClientID),
		Username:         aws.String(in.Username),
		ConfirmationCode: aws.String(in.ConfirmationCode),
		Password:         aws.String(in.ConfirmationPassword),
		SecretHash:       aws.String(computeSecretHash(r.AppClientSecret, in.Username, r.AppClientID)),
	}

	res, err = r.client.ConfirmForgotPassword(input)
	if err != nil {
		return nil, err
	}

	log.Info("Request confirm reset password success", res.String())
	return res, nil
}

func (r cognitoRepository) SignIn(ctx context.Context, in repoIn.SignIn) (res *cognito.AdminInitiateAuthOutput, err error) {
	params := map[string]*string{
		"USERNAME":    aws.String(in.Username),
		"PASSWORD":    aws.String(in.Password),
		"SECRET_HASH": aws.String(computeSecretHash(r.AppClientSecret, in.Username, r.AppClientID)),
	}

	authTry := &cognito.AdminInitiateAuthInput{
		AuthFlow:       aws.String(flowUsernamePassword),
		ClientId:       aws.String(r.AppClientID),
		UserPoolId:     aws.String(r.UserPoolID),
		AuthParameters: params,
	}

	res, err = r.client.AdminInitiateAuth(authTry)
	if err != nil {
		return nil, err
	}

	log.Info("Initiate success", res.AuthenticationResult)
	return res, nil
}

// Secret hash is not a client secret itself, but a base64 encoded hmac-sha256
// hash.
// The actual AWS documentation on how to compute this hash is here:
// https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash
func computeSecretHash(clientSecret string, username string, clientId string) string {
	mac := hmac.New(sha256.New, []byte(clientSecret))
	mac.Write([]byte(username + clientId))

	return base64.StdEncoding.EncodeToString(mac.Sum(nil))
}
