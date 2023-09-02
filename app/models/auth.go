package models

import (
	"context"
	"errors"
	"strings"

	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/app/domain/entity"
	cognitoRepo "github.com/knailk/learning-platform/app/domain/repository"
	cognitoRepoIn "github.com/knailk/learning-platform/app/domain/repository/in/cognito"
	postgresRepo "github.com/knailk/learning-platform/db/postgresql/repository"
	"github.com/knailk/learning-platform/pkg/authjwt"
	"gorm.io/gorm/clause"
)

// AuthModel ...
type AuthModel struct {
	Repo        *postgresRepo.PostgresRepository
	CognitoRepo cognitoRepo.CognitoRepository
}

// Login ...
func (m *AuthModel) Login(ctx context.Context, req request.LoginRequest) (token *authjwt.TokenPair, user *entity.User, err error) {
	normalizeEmail := strings.ToLower(req.Email)

	user, err = m.Repo.User.WithContext(ctx).Where(m.Repo.User.Email.Eq(normalizeEmail)).First()
	if err != nil {
		return token, user, err
	}

	res, err := m.CognitoRepo.SignIn(ctx, cognitoRepoIn.SignIn{
		Username: normalizeEmail, Password: req.Password,
	})
	if err != nil {
		return token, user, err
	}

	if res != nil {
		err = m.Repo.UserToken.WithContext(ctx).Clauses(clause.OnConflict{
			Columns:   []clause.Column{{Name: "user_id"}},
			DoUpdates: clause.AssignmentColumns([]string{"access_token", "access_token_expires_in", "refresh_token", "refresh_token_expires_in"}),
		}).Create(&entity.UserToken{
			UserID:                user.ID,
			AccessToken:           *res.AuthenticationResult.AccessToken,
			AccessTokenExpiresIn:  *res.AuthenticationResult.ExpiresIn,
			RefreshToken:          *res.AuthenticationResult.RefreshToken,
			RefreshTokenExpiresIn: *res.AuthenticationResult.ExpiresIn,
		})
		if err != nil {
			return token, user, err
		}
	}

	token, err = m.generateToken(user.ID)
	if err != nil {
		return token, user, err
	}

	return token, user, nil
}

// Register ...
func (m *AuthModel) Register(ctx context.Context, req request.RegisterRequest) (user *entity.User, token *authjwt.TokenPair, err error) {
	normalizeEmail := strings.ToLower(req.Email)
	//Check if the user exists in database
	checkUser, err := m.Repo.User.WithContext(ctx).Where(m.Repo.User.Email.Eq(normalizeEmail)).Count()
	if err != nil {
		return user, token, err
	}

	if checkUser > 0 {
		return user, token, errors.New("email already exists")
	}

	user = &entity.User{
		ID:    uuid.New(),
		Email: req.Email,
		Name:  req.Name,
		Age:   req.Age,
		Phone: req.Phone,
	}

	//Create the user and return back the user ID
	err = m.Repo.User.WithContext(ctx).Create(user)
	if err != nil {
		return user, token, err
	}

	_, err = m.CognitoRepo.SignUp(ctx, cognitoRepoIn.SignUp{
		Username: normalizeEmail,
		Password: req.Password,
	})
	if err != nil {
		return user, token, err
	}

	token, err = m.generateToken(user.ID)
	if err != nil {
		return user, token, err
	}

	return user, token, err
}

func (m *AuthModel) ConfirmRegister(ctx context.Context, req request.ConfirmRegister) (user *entity.User, token *authjwt.TokenPair, err error) {
	normalizeEmail := strings.ToLower(req.Email)

	existedUser, err := m.Repo.User.WithContext(ctx).Where(m.Repo.User.Email.Eq(normalizeEmail)).First()
	if err != nil {
		return user, token, err
	}

	_, err = m.CognitoRepo.ConfirmRegister(ctx, cognitoRepoIn.ConfirmRegister{
		Username:         normalizeEmail,
		ConfirmationCode: req.ConfirmationCode,
	})
	if err != nil {
		return user, token, err
	}

	_, err = m.Repo.User.WithContext(ctx).
		Where(m.Repo.User.ID.Eq(existedUser.ID)).
		Updates(entity.User{
			Verified: true,
		})
	if err != nil {
		return user, token, err
	}

	existedUser.Verified = true

	token, err = m.generateToken(user.ID)
	if err != nil {
		return user, token, err
	}

	return user, token, nil
}

func (m *AuthModel) ForgotPassword(ctx context.Context, req request.ForgotPassword) (*authjwt.TokenPair, error) {
	normalizeEmail := strings.ToLower(req.Email)

	user, err := m.Repo.User.WithContext(ctx).Where(m.Repo.User.Email.Eq(normalizeEmail)).First()
	if err != nil {
		return nil, err
	}

	_, err = m.CognitoRepo.ForgotPassword(ctx, cognitoRepoIn.ForgotPassword{Username: normalizeEmail})
	if err != nil {
		return nil, err
	}

	token, err := m.generateToken(user.ID)
	if err != nil {
		return nil, err
	}

	return token, nil
}

func (m *AuthModel) ChangePassword(ctx context.Context, req request.ChangePassword) (*authjwt.TokenPair, error) {
	user, err := m.Repo.User.WithContext(ctx).Where(m.Repo.User.ID.Eq(req.UserID)).First()
	if err != nil {
		return nil, err
	}

	userToken, err := m.Repo.UserToken.WithContext(ctx).Where(m.Repo.UserToken.UserID.Eq(req.UserID)).First()
	if err != nil {
		return nil, err
	}

	_, err = m.CognitoRepo.ChangePassword(ctx, cognitoRepoIn.ChangePassword{
		AccessToken:      userToken.AccessToken,
		PreviousPassword: req.PreviousPassword,
		ProposedPassword: req.ProposedPassword,
	})
	if err != nil {
		return nil, err
	}

	token, err := m.generateToken(user.ID)
	if err != nil {
		return nil, err
	}

	return token, nil
}

func (m *AuthModel) ResendConfirmationCode(ctx context.Context, req request.ResendConfirmationCode) error {
	_, err := m.CognitoRepo.ResendConfirmationCode(ctx, cognitoRepoIn.ResendConfirmationCode{
		Username: strings.ToLower(req.Email),
	})
	if err != nil {
		return err
	}

	return nil
}

func (m *AuthModel) ConfirmForgotPassword(ctx context.Context, req request.ConfirmForgotPassword) (*authjwt.TokenPair, error) {
	normalizeEmail := strings.ToLower(req.Email)

	user, err := m.Repo.User.WithContext(ctx).Where(m.Repo.User.Email.Eq(normalizeEmail)).First()
	if err != nil {
		return nil, err
	}

	_, err = m.CognitoRepo.ConfirmForgotPassword(ctx, cognitoRepoIn.ConfirmForgotPassword{
		Username:         normalizeEmail,
		ConfirmationCode: req.ConfirmationCode, ConfirmationPassword: req.ConfirmationPassword,
	})
	if err != nil {
		return nil, err
	}

	token, err := m.generateToken(user.ID)
	if err != nil {
		return nil, err
	}

	return token, nil
}

func (m *AuthModel) Refresh(ctx context.Context, refreshToken string) (*authjwt.TokenPair, error) {
	claims, err := m.verifyJWTToken(refreshToken)
	if err != nil {
		return nil, errors.New("error unauthorize")
	}

	user, err := m.Repo.User.WithContext(ctx).Where(m.Repo.User.ID.Eq(uuid.MustParse(claims.UserID))).First()
	if err != nil {
		return nil, err
	}

	token, err := m.generateToken(user.ID)
	if err != nil {
		return nil, err
	}
	return token, nil
}

func (m *AuthModel) GetCurrentAuth(ctx context.Context, jwt string) (*entity.User, error) {
	claims, err := m.verifyJWTToken(jwt)
	if err != nil {
		return nil, errors.New("error unauthorize")
	}

	existedUser, err := m.Repo.User.WithContext(ctx).
		Where(m.Repo.User.ID.Eq(uuid.MustParse(claims.UserID))).
		First()
	if err != nil {
		return nil, err
	}

	return existedUser, nil
}

func (m *AuthModel) generateToken(userID uuid.UUID) (tokenPair *authjwt.TokenPair, err error) {
	return m.generateJWTTokenPair(uuid.New(), userID)
}

func (m *AuthModel) generateJWTTokenPair(uID uuid.UUID, userID uuid.UUID) (*authjwt.TokenPair, error) {
	claims := authjwt.AuthClaims{
		UID:    uID.String(),
		UserID: userID.String(),
	}

	tokenPair, err := authjwt.GenerateTokenPair(&claims)
	if err != nil {
		return nil, errors.New("failed to generate token pair")
	}

	return tokenPair, nil
}

func (m *AuthModel) verifyJWTToken(token string) (*authjwt.AuthClaims, error) {
	claims, err := authjwt.VerifyToken(token)
	if err != nil {
		return nil, err
	}
	return claims, nil
}
