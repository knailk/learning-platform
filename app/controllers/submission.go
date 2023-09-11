package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	uuid "github.com/google/uuid"
	"github.com/knailk/learning-platform/app/domain/entity"
	"github.com/knailk/learning-platform/app/models"
	"github.com/knailk/learning-platform/pkg/log"
)

type SubmissionController struct {
	*AuthController
	SubmissionModel *models.SubmissionModel
}

func (ctrl *SubmissionController) GetMostRecent(ctx *gin.Context) {
	_, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	userID, err := uuid.Parse(ctx.Param("user_id"))
	if err != nil {
		log.Error("parse id error: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Parse id error", "err": err})
	}

	submissions, err := ctrl.SubmissionModel.GetMostRecent(ctx, userID)
	if err != nil {
		log.Error("error listing submissions", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Submit error", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": submissions})
}

func (ctrl *SubmissionController) Get(ctx *gin.Context) {
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

	submissions, err := ctrl.SubmissionModel.Get(ctx, id)
	if err != nil {
		log.Error("error listing submissions", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Submit error", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": submissions})
}

func (ctrl *SubmissionController) ListByUserID(ctx *gin.Context) {
	_, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	userID, err := uuid.Parse(ctx.Param("user_id"))
	if err != nil {
		log.Error("parse id error: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Parse id error", "err": err})
	}

	submissions, err := ctrl.SubmissionModel.ListByUserID(ctx, userID)
	if err != nil {
		log.Error("error listing submissions", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Submit error", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": submissions})
}

func (ctrl *SubmissionController) Create(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	req := entity.Submission{}

	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": err, "error": err.Error()})
		return
	}

	req.UserID = auth.ID

	err = ctrl.SubmissionModel.Create(ctx, req)
	if err != nil {
		log.Error("error create submission", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Submit error", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"message": "OK"})
}
