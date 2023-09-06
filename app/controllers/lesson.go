package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	uuid "github.com/google/uuid"
	"github.com/knailk/learning-platform/app/domain/entity"
	"github.com/knailk/learning-platform/app/models"
	"github.com/knailk/learning-platform/pkg/log"
)

type LessonController struct {
	*AuthController
	LessonModel *models.LessonModel
}

func (ctrl *LessonController) Get(ctx *gin.Context) {
	_, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	lesson, err := ctrl.LessonModel.Get(ctx, uuid.MustParse(ctx.Param("id")))
	if err != nil {
		log.Error("error get lessons", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid lesson", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": lesson})
}

func (ctrl *LessonController) List(ctx *gin.Context) {
	_, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	lessons, err := ctrl.LessonModel.List(ctx)
	if err != nil {
		log.Error("error listing lessons", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid lesson", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": lessons})
}

func (ctrl *LessonController) ListByChapterID(ctx *gin.Context) {
	_, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	lessons, err := ctrl.LessonModel.ListByChapterID(ctx, uuid.MustParse(ctx.Param("id")))
	if err != nil {
		log.Error("error listing lessons", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid lesson", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": lessons})
}

func (ctrl *LessonController) CreateLessonsAnswer(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	var createAnswerRequest entity.LessonAnswer
	if err := ctx.ShouldBindJSON(&createAnswerRequest); err != nil {
		log.Error("bind json error: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "bind json error"})
		return
	}

	createAnswerRequest.UserID = auth.ID

	err = ctrl.LessonModel.CreateAnswer(ctx, createAnswerRequest)
	if err != nil {
		log.Error("create lesson answer error: ", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "Create lesson answer error", "err": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"message": "OK"})
}
