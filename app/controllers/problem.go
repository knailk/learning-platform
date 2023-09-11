package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	uuid "github.com/google/uuid"
	"github.com/knailk/learning-platform/app/domain/entity"
	"github.com/knailk/learning-platform/app/models"
	"github.com/knailk/learning-platform/pkg/log"
)

type ProblemController struct {
	*AuthController
	ProblemModel *models.ProblemModel
}

func (ctrl *ProblemController) List(ctx *gin.Context) {
	_, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	problems, err := ctrl.ProblemModel.List(ctx, entity.Problem{
		Level: entity.ProblemLevel(ctx.Query("level")),
		URL:   ctx.Query("url"),
	})
	if err != nil {
		log.Error("error listing problems", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid chapter", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": problems})
}

func (ctrl *ProblemController) Get(ctx *gin.Context) {
	_, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	id, err := uuid.Parse(ctx.Param("id"))
	if err != nil {
		log.Error("parse id error: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Parse id error", "err": err})
	}

	problem, err := ctrl.ProblemModel.Get(ctx, id)
	if err != nil {
		log.Error("error get problem", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid problem", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": problem})
}
