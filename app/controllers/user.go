package controllers

import (
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
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in"})
		return
	}

	user, err := ctrl.UserModel.One(ctx, au.ID)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get user", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": user})
}

func (ctrl *UserController) UpdateProfile(ctx *gin.Context) {
	au, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in"})
		return
	}

	var profileRequest request.ProfileRequest

	if validationErr := ctx.ShouldBindJSON(&profileRequest); validationErr != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": validationErr})
		return
	}

	profileRequest.UserID = au.ID

	user, err := ctrl.UserModel.Update(ctx, profileRequest)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get user", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": user})
}

func (ctrl *UserController) GetRank(ctx *gin.Context) {
	rank, err := ctrl.UserModel.GetRank(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get rank", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": rank})
}
