package api

import (
	"context"
	"errors"
	"net/http"

	"github.com/gin-contrib/gzip"
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/knailk/learning-platform/app/forms"
	"github.com/knailk/learning-platform/app/middleware"
	"github.com/rs/zerolog/log"
)

func Handler(ctx context.Context) (*gin.Engine, error) {
	//Start the default gin server
	r := gin.Default()

	initMiddlewares(r)

	v1 := r.Group("/v1")
	{
		/*** START USER ***/
		user := new(controllers.UserController)

		v1.POST("/user/login", user.Login)
		v1.POST("/user/register", user.Register)
		v1.GET("/user/logout", user.Logout)

		/*** START AUTH ***/
		auth := new(controllers.AuthController)

		//Refresh the token when needed to generate new access_token and refresh_token for the user
		v1.POST("/token/refresh", auth.Refresh)

		/*** START Article ***/
		article := new(controllers.ArticleController)

		v1.POST("/article", TokenAuthMiddleware(), article.Create)
		v1.GET("/articles", TokenAuthMiddleware(), article.All)
		v1.GET("/article/:id", TokenAuthMiddleware(), article.One)
		v1.PUT("/article/:id", TokenAuthMiddleware(), article.Update)
		v1.DELETE("/article/:id", TokenAuthMiddleware(), article.Delete)
	}

	r.LoadHTMLGlob("./public/html/*")

	r.Static("/public", "./public")

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"ginBoilerplateVersion": "v0.03",
			"goVersion":             runtime.Version(),
		})
	})

		// route not found
		r.NoRoute(func(ctx *gin.Context) {
			log.Error(" ", ctx.Request)
			
			ctx.JSON(http.StatusNotFound, gin.H{"errors": apperrors.ErrNotFound.Error()})
		})

}

func initMiddlewares(router *gin.Engine) {
	//Custom form validator
	binding.Validator = new(middleware.DefaultValidator)
	router.Use(middleware.CORSMiddleware())
	router.Use(middleware.Recovery())
	router.Use(middleware.RequestIDMiddleware())
	router.Use(gzip.Gzip(gzip.DefaultCompression))
}
