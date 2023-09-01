package controllers

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/knailk/learning-platform/app/domain/entity"
	"github.com/knailk/learning-platform/app/models"
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
	authModel models.AuthModel
}

// NewAuthController returns a new auth controller
func NewAuthController(
	authModel models.AuthModel,
) *AuthController {
	return &AuthController{
		authModel: authModel,
	}
}

// GetCurrentAuth returns the current auth
func (h *AuthController) GetCurrentAuth(ctx *gin.Context) (*entity.User, error) {
	token, err := h.GetAccessToken(ctx)
	if err != nil {
		return nil, err
	}

	auth, err := h.authModel.GetCurrentAuth(ctx, token)
	if err != nil {
		return nil, err
	}

	return auth, nil
}

// GetAccessToken gets the access token.
func (h *AuthController) GetAccessToken(ctx *gin.Context) (token string, err error) {
	if token, err = ctx.Cookie(refreshKey); err != nil {
		return "", errors.New("Error Unauthorized")
	}
	return token, nil
}

// GetRefreshToken gets the refresh token.
func (h *AuthController) GetRefreshToken(ctx *gin.Context) (token string, err error) {
	if token, err = ctx.Cookie(refreshKey); err != nil {
		return "",errors.New("Error Unauthorized")
	}
	return token, nil
}

// SetAccessCookie sets the access cookie.
func (h *AuthController) SetAccessCookie(ctx *gin.Context, token string) {
	h.setTokenWithAge(ctx, accessKey, cookiePath, token, cookieMaxAge)
}

// SetRefreshCookie sets the refresh cookie.
func (h *AuthController) SetRefreshCookie(ctx *gin.Context, token string) {
	h.setTokenWithAge(ctx,refreshKey, cookiePathRefreshToken, token, cookieMaxAge)
}

// ExpireJWTCookie expires the JWT cookie.
func (h *AuthController) ExpireJWTCookie(ctx *gin.Context) {
	h.setTokenWithAge(ctx, accessKey, cookiePath, "", 0)
	h.setTokenWithAge(ctx, refreshKey, cookiePathRefreshToken, "", 0)
}

func (h *AuthController) setTokenWithAge(ctx *gin.Context, key, path, token string, age int) {
	ctx.SetSameSite(http.SameSiteLaxMode)
	ctx.SetCookie(key, token, age, path, "", false, cookieHTTPOnly)
}
