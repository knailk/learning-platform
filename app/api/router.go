package api

import (
	"context"
	"errors"
	"net/http"

	"github.com/gin-contrib/gzip"
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/knailk/learning-platform/app/models"
	"github.com/knailk/learning-platform/app/controllers"
	"github.com/knailk/learning-platform/app/middleware"
	"github.com/knailk/learning-platform/db"
	"github.com/knailk/learning-platform/db/postgresql/repository"
	"github.com/knailk/learning-platform/pkg/log"
)

func Handler(ctx context.Context) (*gin.Engine, error) {
	//Start the default gin server
	r := gin.Default()
	initMiddleware(r)

	dbSQL := db.GetDB()
	repo := repository.NewPostgresRepository(dbSQL)

	v1 := r.Group("/v1")
	{
		/*** START USER ***/
		user := &controllers.UserController{UserModel: &models.UserModel{Repo: repo}}

		v1.POST("/user/login", user.Login)
		v1.POST("/user/register", user.Register)
		v1.GET("/user/logout", user.Logout)
		v1.PUT("/user/profile", user.UpdateProfile)

		/*** START AUTH ***/
		auth := new(controllers.AuthController)

		//Refresh the token when needed to generate new access_token and refresh_token for the user
		v1.POST("/token/refresh", auth.Refresh)

		/*** START Article ***/
		// article := new(controllers.ArticleController)

		// v1.POST("/article", middleware.TokenAuthMiddleware(), article.Create)
		// v1.GET("/articles", middleware.TokenAuthMiddleware(), article.All)
		// v1.GET("/article/:id", middleware.TokenAuthMiddleware(), article.One)
		// v1.PUT("/article/:id", middleware.TokenAuthMiddleware(), article.Update)
		// v1.DELETE("/article/:id", middleware.TokenAuthMiddleware(), article.Delete)
	}

	// route not found
	r.NoRoute(func(ctx *gin.Context) {
		log.Error("Route not found", ctx.Request)

		ctx.JSON(http.StatusNotFound, gin.H{"errors": errors.New("Route not found")})
	})

	return r, nil
}

func initMiddleware(router *gin.Engine) {
	//Custom form validator
	binding.Validator = new(middleware.DefaultValidator)
	router.Use(middleware.CORSMiddleware())
	router.Use(middleware.Recovery())
	router.Use(middleware.RequestIDMiddleware())
	router.Use(gzip.Gzip(gzip.DefaultCompression))
}
