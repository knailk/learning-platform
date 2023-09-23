package controllers

import (
	"strconv"

	"github.com/knailk/learning-platform/app/models"

	"net/http"

	"github.com/gin-gonic/gin"
)

type GameController struct {
	*AuthController
	GameModel *models.GameModel
}

func (ctrl *GameController) ListGames(ctx *gin.Context) {
	_, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in", "error": err.Error()})
		return
	}

	games, err := ctrl.GameModel.ListGames(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error get games", "err": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"data": games})

}

func (ctrl *GameController) CompleteGame(ctx *gin.Context) {
	auth, err := ctrl.GetCurrentAuth(ctx)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "User not logged in", "error": err.Error()})
		return
	}

	// id, err := uuid.Parse(ctx.Param("id"))
	// if err != nil {
	// 	ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "ID param is not correct", "error": err.Error()})
	// 	return
	// }
	level, err := strconv.Atoi(ctx.Param("id"))
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Level must be integer", "error": err.Error()})
		return
	}

	err = ctrl.GameModel.CompleteGame(ctx, level, auth.ID)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Error complete game", "err": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Game completed"})
}
