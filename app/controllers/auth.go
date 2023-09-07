package controllers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/app/domain/entity"
	"github.com/knailk/learning-platform/app/models"
	"github.com/knailk/learning-platform/pkg/log"
)

const (
	accessKey              = "knailk_jwt_access"
	refreshKey             = "knailk_jwt_refresh"
	cookiePath             = "/v1"
	cookiePathRefreshToken = "/v1/auth/refresh"
	cookieHTTPOnly         = false
	cookieMaxAge           = 86400
)

// AuthController hold auth struct
type AuthController struct {
	AuthModel *models.AuthModel
}

// NewAuthController returns a new auth controller
func NewAuthController(
	AuthModel models.AuthModel,
) *AuthController {
	return &AuthController{
		AuthModel: &AuthModel,
	}
}

func (ctrl *AuthController) Login(ctx *gin.Context) {
	var loginRequest request.LoginRequest

	if validationErr := ctx.ShouldBindJSON(&loginRequest); validationErr != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Invalid login details"})
		return
	}

	user, token, err := ctrl.AuthModel.Login(ctx, loginRequest)
	if err != nil {
		log.Error("error login: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Invalid login details"})
		return
	}

	ctrl.SetAccessCookie(ctx, token.AccessToken.Token)
	ctrl.SetRefreshCookie(ctx, token.RefreshToken.Token)
	
	ctx.JSON(http.StatusOK, gin.H{"message": "Successfully logged in", "user": user, "token": token})
}

// Register ...
func (ctrl *AuthController) Register(ctx *gin.Context) {
	var registerRequest request.RegisterRequest

	if validationErr := ctx.ShouldBindJSON(&registerRequest); validationErr != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Invalid register details", "error": validationErr.Error()})
		return
	}

	user, token, err := ctrl.AuthModel.Register(ctx, registerRequest)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Successfully registered", "user": user, "token": token})
}

// Register ...
func (ctrl *AuthController) RegisterConfirm(ctx *gin.Context) {
	var confirmRegisterRequest request.ConfirmRegister

	if err := ctx.ShouldBindJSON(&confirmRegisterRequest); err != nil {
		log.Error("confirm register error: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Confirm register error"})
		return
	}

	user, token, err := ctrl.AuthModel.ConfirmRegister(ctx, confirmRegisterRequest)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": err.Error()})
		return
	}

	ctrl.SetAccessCookie(ctx, token.AccessToken.Token)
	ctrl.SetRefreshCookie(ctx, token.RefreshToken.Token)

	ctx.JSON(http.StatusOK, gin.H{"message": "Confirm register successfully", "user": user, "token": token})
}

func (ctrl *AuthController) ForgotPassword(ctx *gin.Context) {
	var forgotPasswordRequest request.ForgotPassword

	if err := ctx.ShouldBindJSON(&forgotPasswordRequest); err != nil {
		log.Error("forgot password error: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Forgot password error"})
		return
	}

	authToken, err := ctrl.AuthModel.ForgotPassword(ctx, forgotPasswordRequest)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": err.Error()})
		return
	}

	ctrl.SetAccessCookie(ctx, authToken.AccessToken.Token)
	ctrl.SetRefreshCookie(ctx, authToken.RefreshToken.Token)

	ctx.JSON(http.StatusOK, gin.H{"message": "Forgot password request OK"})
}

func (ctrl *AuthController) ConfirmForgotPassword(ctx *gin.Context) {
	var confirmForgotPasswordRequest request.ConfirmForgotPassword

	if err := ctx.ShouldBindJSON(&confirmForgotPasswordRequest); err != nil {
		log.Error("confirm forgot password  error: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Confirm forgot password error"})
		return
	}

	authToken, err := ctrl.AuthModel.ConfirmForgotPassword(ctx, confirmForgotPasswordRequest)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": err.Error()})
		return
	}

	ctrl.SetAccessCookie(ctx, authToken.AccessToken.Token)
	ctrl.SetRefreshCookie(ctx, authToken.RefreshToken.Token)

	ctx.JSON(http.StatusOK, gin.H{"message": "Confirm forgot password request OK"})
}

func (ctrl *AuthController) ResendConfirmationCode(ctx *gin.Context) {
	var resendConfirmationCodeRequest request.ResendConfirmationCode

	if err := ctx.ShouldBindJSON(&resendConfirmationCodeRequest); err != nil {
		log.Error("resend confirm code error: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Resend confirmation code error"})
		return
	}

	err := ctrl.AuthModel.ResendConfirmationCode(ctx, resendConfirmationCodeRequest)
	if err != nil {
		log.Error("error resend confirm code: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Resend confirmation code OK"})
}

func (ctrl *AuthController) ChangePassword(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		log.Error("error change password: ", err)
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	var changePasswordRequest request.ChangePassword

	if err := ctx.ShouldBindJSON(&changePasswordRequest); err != nil {
		log.Error("change password error: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Confirm forgot password error"})
		return
	}

	changePasswordRequest.UserID = auth.ID

	authToken, err := ctrl.AuthModel.ChangePassword(ctx, changePasswordRequest)
	if err != nil {
		log.Error("error change password in model: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": err.Error()})
		return
	}

	ctrl.SetAccessCookie(ctx, authToken.AccessToken.Token)
	ctrl.SetRefreshCookie(ctx, authToken.RefreshToken.Token)

	ctx.JSON(http.StatusOK, gin.H{"message": "Confirm forgot password request OK"})
}

// Logout ...
func (ctrl *AuthController) Logout(ctx *gin.Context) {
	ctrl.ExpireJWTCookie(ctx)

	ctx.JSON(http.StatusOK, gin.H{"message": "Successfully logged out"})
}

func (ctrl *AuthController) Refresh(ctx *gin.Context) {
	token, err := ctrl.GetRefreshToken(ctx)
	if err != nil {
		log.Error("error refresh: ", err)
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	userToken, err := ctrl.AuthModel.Refresh(ctx, token)
	if err != nil {
		log.Error("error refresh: ", err)
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": err.Error()})
	}

	ctrl.SetAccessCookie(ctx, userToken.AccessToken.Token)
	ctrl.SetRefreshCookie(ctx, userToken.RefreshToken.Token)

	ctx.JSON(http.StatusOK, gin.H{"message": "Refreshed OK"})
}

// GetCurrentAuth returns the current auth
func (ctrl *AuthController) GetCurrentAuth(ctx *gin.Context) (*entity.User, error) {
	token, err := ctrl.GetAccessToken(ctx)
	if err != nil {
		return nil, err
	}

	auth, err := ctrl.AuthModel.GetCurrentAuth(ctx, token)
	if err != nil {
		return nil, err
	}

	return auth, nil
}

// GetAccessToken gets the access token.
func (ctrl *AuthController) GetAccessToken(ctx *gin.Context) (token string, err error) {
	if token, err = ctx.Cookie(accessKey); err != nil {
		return "", fmt.Errorf("error unauthorized: %w", err)
	}

	return token, nil
}

// GetRefreshToken gets the refresh token.
func (ctrl *AuthController) GetRefreshToken(ctx *gin.Context) (token string, err error) {
	if token, err = ctx.Cookie(refreshKey); err != nil {
		return "", fmt.Errorf("error unauthorized: %w", err)
	}
	return token, nil
}

// SetAccessCookie sets the access cookie.
func (ctrl *AuthController) SetAccessCookie(ctx *gin.Context, token string) {
	ctrl.setTokenWithAge(ctx, accessKey, cookiePath, token, cookieMaxAge)
}

// SetRefreshCookie sets the refresh cookie.
func (ctrl *AuthController) SetRefreshCookie(ctx *gin.Context, token string) {
	ctrl.setTokenWithAge(ctx, refreshKey, cookiePathRefreshToken, token, cookieMaxAge)
}

// ExpireJWTCookie expires the JWT cookie.
func (ctrl *AuthController) ExpireJWTCookie(ctx *gin.Context) {
	ctrl.setTokenWithAge(ctx, accessKey, cookiePath, "", 0)
	ctrl.setTokenWithAge(ctx, refreshKey, cookiePathRefreshToken, "", 0)
}

func (ctrl *AuthController) setTokenWithAge(ctx *gin.Context, key, path, token string, age int) {
	ctx.SetSameSite(http.SameSiteLaxMode)
	ctx.SetCookie(key, token, age, path, "", false, cookieHTTPOnly)
}
