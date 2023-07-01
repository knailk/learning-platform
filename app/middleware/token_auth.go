package middleware

import (
	"github.com/gin-gonic/gin"
	"github.com/knailk/learning-platform/app/controllers"
)

var auth = new(controllers.AuthController)

// TokenAuthMiddleware ...
// JWT Authentication middleware attached to each request that needs to be authenticated to validate the access_token in the header
func TokenAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		auth.TokenValid(c)
		c.Next()
	}
}