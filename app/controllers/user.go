package controllers

import (
	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/app/models"

	"net/http"

	"github.com/gin-gonic/gin"
)

// UserController ...
type UserController struct {
	*AuthController
	UserModel *models.UserModel
}

func (ctrl *UserController) GetProfile(ctx *gin.Context) {
	au, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in", "error": err.Error()})
		return
	}

	user, err := ctrl.UserModel.One(ctx, au.ID)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get user", "err": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": user})
}

func (ctrl *UserController) UpdateProfile(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in", "error": err.Error()})
		return
	}

	var profileRequest request.ProfileRequest

	if err := ctx.ShouldBindJSON(&profileRequest); err != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": err, "error": err.Error()})
		return
	}

	profileRequest.UserID = auth.ID

	user, err := ctrl.UserModel.Update(ctx, profileRequest)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get user", "err": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": user})
}

func (ctrl *UserController) GetRank(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in", "error": err.Error()})
		return
	}

	rank, err := ctrl.UserModel.GetRank(ctx, auth.ID)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get rank", "error": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": rank})
}

func (ctrl *UserController) GetUserInfoByID(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in", "error": err.Error()})
		return
	}

	id, err := uuid.Parse(ctx.Param("id"))
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "get id error", "error": err.Error()})
		return
	}

	userInfo, err := ctrl.UserModel.GetUserInfo(ctx, id, auth.ID)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get user", "error": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": userInfo})
}

func (ctrl *UserController) GetUsers(ctx *gin.Context) {
	_, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in", "error": err.Error()})
		return
	}

	userInfo, err := ctrl.UserModel.GetUsers(ctx, ctx.Query("name"))
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get rank", "error": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": userInfo})
}

func (ctrl *UserController) UploadAvatar(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in", "error": err.Error()})
		return
	}

	req := request.UpdateAvatarRequest{}
	if err = ctx.BindJSON(&req); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error upload avatar", "error": err.Error()})
		return
	}

	req.UserID = auth.ID

	user, err := ctrl.UserModel.UpdateAvatar(ctx, req)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error update avatar", "error": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": user})
}
