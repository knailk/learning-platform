package api

import (
	"context"
	"net/http"

	"github.com/gin-contrib/gzip"
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/knailk/learning-platform/app/controllers"
	cognitoClient "github.com/knailk/learning-platform/app/external/adaptor/cognitoclient"
	"github.com/knailk/learning-platform/app/external/adaptor/s3client"
	"github.com/knailk/learning-platform/app/infra/provider"
	"github.com/knailk/learning-platform/app/middleware"
	"github.com/knailk/learning-platform/app/models"
	"github.com/knailk/learning-platform/db/postgresql/repository"
	"github.com/knailk/learning-platform/pkg/log"
)

func Handler(ctx context.Context, provider *provider.Provider) (*gin.Engine, error) {
	//Start the default gin server
	r := gin.Default()
	initMiddleware(r)

	dbSQL := provider.DB
	repo := repository.NewPostgresRepository(dbSQL)
	cognitoRepo := cognitoClient.NewCognitoRepository(provider.CognitoClient, provider.Config)
	s3Repo := s3client.NewS3Repository(provider.S3Client, provider.Config)

	v1 := r.Group("/v1")
	{
		/*** START AUTH ***/
		auth := &controllers.AuthController{AuthModel: &models.AuthModel{Repo: repo, CognitoRepo: cognitoRepo}}
		v1.GET("/auth/me", auth.CurrentUser)
		v1.POST("/auth/login", auth.Login)
		v1.POST("/auth/register", auth.Register)
		v1.POST("/auth/register/confirm", auth.RegisterConfirm)
		v1.GET("/auth/logout", auth.Logout)
		v1.POST("/auth/forgot-password", auth.ForgotPassword)
		v1.POST("/auth/forgot-password/confirm", auth.ConfirmForgotPassword)
		v1.POST("/auth/register/resend", auth.ResendConfirmationCode)
		v1.POST("/auth/change-password", auth.ChangePassword)
		v1.POST("/auth/refresh", auth.Refresh)

		/*** START USER ***/
		user := &controllers.UserController{AuthController: auth, UserModel: &models.UserModel{Repo: repo, S3Repo: s3Repo}}
		v1.PUT("/user/profile", user.UpdateProfile)
		v1.GET("/user/ranks", user.GetRank)
		v1.GET("/users/:id", user.GetUserInfoByID)
		v1.POST("/user/avatar", user.UploadAvatar)

		/*** START Chapter ***/
		chapter := &controllers.ChapterController{AuthController: auth, ChapterModel: &models.ChapterModel{Repo: repo}}
		v1.GET("/chapters", chapter.List)
		v1.GET("/chapters/:id", chapter.Get)

		/*** START Chapter ***/
		lesson := &controllers.LessonController{AuthController: auth, LessonModel: &models.LessonModel{Repo: repo}}
		v1.GET("/lessons", lesson.List)
		v1.POST("/lessons/answer", lesson.CreateLessonsAnswer)
		v1.GET("/lessons/answer/:id", lesson.GetLessonsAnswer)
		v1.GET("/lessons/:id", lesson.Get)
		v1.GET("/chapters/:id/lessons", lesson.ListByChapterID)

		/*** START Chapter ***/
		follow := &controllers.FollowController{AuthController: auth, FollowModel: &models.FollowModel{Repo: repo}}
		v1.GET("/follows", follow.GetFollow)
		v1.POST("/follows", follow.CreateFollow)
		v1.DELETE("/follows/:following_id", follow.DeleteFollow)
	}

	// route not found
	r.NoRoute(func(ctx *gin.Context) {
		log.Error("Route not found", ctx.Request)

		ctx.JSON(http.StatusNotFound, gin.H{"errors": "Route not found"})
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
