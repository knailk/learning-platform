package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Recovery create a middleware for recovering from panic
func Recovery() gin.HandlerFunc {
	// Use nil as writer to prevent Gin to log sensitive information
	// of the request to the default stdout.
	return gin.CustomRecoveryWithWriter(nil, func(ctx *gin.Context, recover interface{}) {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": http.StatusInternalServerError})
		ctx.Abort()
	})
}
