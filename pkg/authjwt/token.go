package authjwt

import (
	"github.com/golang-jwt/jwt"
)

// TokenPair contains token pair
type TokenPair struct {
	AccessToken  Token
	RefreshToken Token
}

// Token contains token string and its expiration time
type Token struct {
	Token     string `json:"token"`
	ExpiresAt int64  `json:"expired_at"`
}

type accessClaims struct {
	*AuthClaims
	jwt.StandardClaims
}
