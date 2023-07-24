package controllers

import (
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/app/models"
	"github.com/knailk/learning-platform/pkg/log"

	"net/http"

	"github.com/gin-gonic/gin"
)

// UserController ...
type UserController struct {
	UserModel *models.UserModel
}

var (
	userRequest = new(request.UserRequest)
)

// Login ...
func (ctrl *UserController) Login(ctx *gin.Context) {
	var loginRequest request.LoginRequest

	if validationErr := ctx.ShouldBindJSON(&loginRequest); validationErr != nil {
		message := userRequest.Login(validationErr)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": message})
		return
	}

	user, token, err := ctrl.UserModel.Login(ctx, loginRequest)
	if err != nil {
		log.Error("error login: ", err)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Invalid login details"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Successfully logged in", "user": user, "token": token})
}

// Register ...
func (ctrl *UserController) Register(ctx *gin.Context) {
	var registerRequest request.RegisterRequest

	if validationErr := ctx.ShouldBindJSON(&registerRequest); validationErr != nil {
		message := userRequest.Register(validationErr)
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": message})
		return
	}

	user, token, err := ctrl.UserModel.Register(ctx, registerRequest)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Successfully registered", "user": user, "token": token})
}

// Logout ...
func (ctrl *UserController) Logout(c *gin.Context) {
	au, err := authModel.ExtractTokenMetadata(c.Request)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in"})
		return
	}

	deleted, delErr := authModel.DeleteAuth(au.AccessUUID)
	if delErr != nil || deleted == 0 { //if any goes wrong
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Invalid request"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Successfully logged out"})
}

func (ctrl *UserController) GetProfile(ctx *gin.Context) {
	au, err := authModel.ExtractTokenMetadata(ctx.Request)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in"})
		return
	}

	user, err := ctrl.UserModel.One(ctx, au.UserID)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get user", "err": err})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"data": user})
}

func (ctrl *UserController) UpdateProfile(ctx *gin.Context) {
	au, err := authModel.ExtractTokenMetadata(ctx.Request)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in"})
		return
	}

	var profileRequest request.ProfileRequest

	if validationErr := ctx.ShouldBindJSON(&profileRequest); validationErr != nil {
		ctx.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": validationErr})
		return
	}

	profileRequest.UserID = au.UserID

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
