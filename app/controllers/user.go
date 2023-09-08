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
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in","error": err})
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
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in","error": err})
		return
	}

	var profileRequest request.ProfileRequest

	if validationErr := ctx.ShouldBindJSON(&profileRequest); validationErr != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": validationErr,"error": err})
		return
	}

	profileRequest.UserID = auth.ID

	user, err := ctrl.UserModel.Update(ctx, profileRequest)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get user", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": user})
}

func (ctrl *UserController) GetRank(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in","error": err})
		return
	}

	rank, err := ctrl.UserModel.GetRank(ctx, auth.ID)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get rank", "error": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": rank})
}
