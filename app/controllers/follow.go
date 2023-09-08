package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	uuid "github.com/google/uuid"
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/app/models"
	"github.com/knailk/learning-platform/pkg/log"
)

type FollowController struct {
	*AuthController
	FollowModel *models.FollowModel
}

func (ctrl *FollowController) GetFollow(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	follow, err := ctrl.FollowModel.GetFollowers(ctx, auth.ID)
	if err != nil {
		log.Error("error get follows", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid follow", "err": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": follow})
}

func (ctrl *FollowController) CreateFollow(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized", "err": err.Error()})
		return
	}

	var req request.Follow
	if err := ctx.ShouldBindJSON(&req); err != nil {
		log.Error("bind json error: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "bind json error", "err": err.Error()})
		return
	}

	req.FollowingID = auth.ID

	err = ctrl.FollowModel.CreateFollow(ctx, req)
	if err != nil {
		log.Error("error listing follows", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid follow", "err": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"message": "success"})
}

func (ctrl *FollowController) DeleteFollow(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized", "err": err.Error()})
		return
	}

	var req request.Follow

	req.FollowingID = auth.ID

	err = ctrl.FollowModel.DeleteFollow(ctx, request.Follow{
		FollowingID: auth.ID,
		FollowedID:  uuid.MustParse(ctx.Param("following_id")),
	})
	if err != nil {
		log.Error("error listing follows", err)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": "Invalid follow", "err": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"message": "success"})
}
