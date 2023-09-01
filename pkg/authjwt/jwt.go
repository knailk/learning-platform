package authjwt

import (
	"fmt"
	"sync"
	"time"

	"github.com/golang-jwt/jwt"
)

type Config struct {
	Secret          string
	AccessTokenExp  time.Duration
	RefreshTokenExp time.Duration
}

var (
	once            sync.Once
	jwtSecret       []byte
	accessTokenExp  time.Duration
	refreshTokenExp time.Duration
	signingMethod   jwt.SigningMethod
)

// InitJWTSession initializes variables for JWT Session
func InitJWTSession(cfg *Config) {
	once.Do(func() {
		jwtSecret = []byte(cfg.Secret)
		accessTokenExp = cfg.AccessTokenExp
		refreshTokenExp = cfg.RefreshTokenExp
		signingMethod = jwt.SigningMethodHS256
	})
}

// GenerateTokenPair generate access & refresh token pair
func GenerateTokenPair(authClaims *AuthClaims) (*TokenPair, error) {
	accessToken, err := generateToken(authClaims, time.Now, accessTokenExp)
	if err != nil {
		return nil, err
	}

	refreshToken, err := generateToken(authClaims, time.Now, refreshTokenExp)
	if err != nil {
		return nil, err
	}

	return &TokenPair{
		AccessToken:  accessToken,
		RefreshToken: refreshToken,
	}, nil
}

// GenerateAccessToken generate access token
func GenerateAccessToken(sub, id string) (*Token, error) {
	expriesAt := time.Now().Add(accessTokenExp).Unix()
	token := jwt.NewWithClaims(signingMethod, jwt.StandardClaims{
		Id:        id,
		IssuedAt:  time.Now().Unix(),
		ExpiresAt: time.Now().Add(accessTokenExp).Unix(),
		Subject:   sub,
	},
	)

	tokenString, err := token.SignedString(jwtSecret)
	if err != nil {
		err = fmt.Errorf("sign access token: %w", err)
		return nil, err
	}

	return &Token{
		Token:     tokenString,
		ExpiresAt: expriesAt,
	}, nil
}

func generateToken(
	authClaims *AuthClaims,
	funcNow func() time.Time,
	expireDuration time.Duration,
) (accessToken Token, err error) {
	var (
		tokenString string
	)

	now := funcNow()
	expriesAt := now.Add(expireDuration).Unix()
	token := jwt.NewWithClaims(signingMethod, &accessClaims{
		StandardClaims: jwt.StandardClaims{
			IssuedAt:  now.Unix(),
			ExpiresAt: now.Add(expireDuration).Unix(),
		},
		AuthClaims: authClaims,
	})

	tokenString, err = token.SignedString(jwtSecret)
	if err != nil {
		err = fmt.Errorf("sign access token: %w", err)
		return
	}

	return Token{
		Token:     tokenString,
		ExpiresAt: expriesAt,
	}, nil
}

// VerifyToken validate token
func VerifyToken(tokenStr string) (*AuthClaims, error) {
	claims := accessClaims{}
	_, err := jwt.ParseWithClaims(tokenStr, &claims, func(token *jwt.Token) (interface{}, error) {
		return jwtSecret, nil
	})

	if err != nil {
		return nil, fmt.Errorf("verify token: %w", err)
	}

	return claims.AuthClaims, nil
}

// VerifyAccessToken validate access token
func VerifyAccessToken(tokenStr string) (*jwt.StandardClaims, error) {
	claims := jwt.StandardClaims{}
	_, err := jwt.ParseWithClaims(tokenStr, &claims, func(token *jwt.Token) (interface{}, error) {
		return jwtSecret, nil
	})
	if err != nil {
		return nil, fmt.Errorf("verify token: %w", err)
	}

	return &claims, nil
}
