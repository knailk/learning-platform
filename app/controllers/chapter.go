package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	uuid "github.com/google/uuid"
	"github.com/knailk/learning-platform/app/models"
	"github.com/knailk/learning-platform/pkg/log"
)

type ChapterController struct {
	*AuthController
	ChapterModel *models.ChapterModel
}

func (ctrl *ChapterController) List(ctx *gin.Context) {
	_, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	chapters, err := ctrl.ChapterModel.List(ctx)
	if err != nil {
		log.Error("error listing chapters", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid chapter", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": chapters})
}

func (ctrl *ChapterController) Get(ctx *gin.Context) {
	_, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	chapter, err := ctrl.ChapterModel.Get(ctx, uuid.MustParse(ctx.Param("id")))
	if err != nil {
		log.Error("error get chapter", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid chapter", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": chapter})
}
