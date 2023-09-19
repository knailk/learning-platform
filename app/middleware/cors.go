package middleware

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// CORSMiddleware ...
// CORS (Cross-Origin Resource Sharing)
func CORSMiddleware() gin.HandlerFunc {
	corsCfg := cors.Config{
		AllowOrigins: []string{"http://localhost:3000", "https://giongedu.store"},
		AllowMethods: []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders: []string{"Content-Length", "Origin", "cookie", "access-control-allow-origin",
			"authorization, origin, content-type, accept", "X-CSRF-Token", "Pragma"},
		ExposeHeaders:    []string{"Content-Length", "Content-Disposition"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}
	return cors.New(corsCfg)
}
