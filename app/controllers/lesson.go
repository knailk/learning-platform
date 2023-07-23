package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	uuid "github.com/google/uuid"
	"github.com/knailk/learning-platform/app/models"
	"github.com/knailk/learning-platform/pkg/log"
)

type LessonController struct {
	LessonModel *models.LessonModel
}

func (ctrl *LessonController) List(ctx *gin.Context) {
	lessons, err := ctrl.LessonModel.List(ctx)
	if err != nil {
		log.Error("error listing lessons", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid lesson", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": lessons})
}

func (ctrl *LessonController) ListByChapterID(ctx *gin.Context) {
	lessons, err := ctrl.LessonModel.ListByChapterID(ctx, uuid.MustParse(ctx.Param("id")))
	if err != nil {
		log.Error("error listing lessons", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid lesson", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": lessons})
}

func (ctrl *LessonController) Get(ctx *gin.Context) {
	lesson, err := ctrl.LessonModel.Get(ctx, uuid.MustParse(ctx.Param("id")))
	if err != nil {
		log.Error("error get lessons", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid lesson", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": lesson})
}
