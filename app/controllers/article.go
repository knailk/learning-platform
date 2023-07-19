package controllers

import (
	"github.com/knailk/learning-platform/app/controllers/request"
	"github.com/knailk/learning-platform/app/models"
)

// ArticleController ...
type ArticleController struct{}

var articleModel = new(models.ArticleModel)
var articleRequest = new(request.ArticleRequest)

// // Create ...
// func (ctrl ArticleController) Create(c *gin.Context) {
// 	userID := getUserID(c)

// 	var request request.CreateArticleRequest

// 	if validationErr := c.ShouldBindJSON(&request); validationErr != nil {
// 		message := articleRequest.Create(validationErr)
// 		c.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": message})
// 		return
// 	}

// 	id, err := articleModel.Create(userID, request)
// 	if err != nil {
// 		c.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": "Article could not be created"})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{"message": "Article created", "id": id})
// }

// // All ...
// func (ctrl ArticleController) All(c *gin.Context) {
// 	userID := getUserID(c)

// 	results, err := articleModel.All(userID)
// 	if err != nil {
// 		c.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"Message": "Could not get articles"})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{"results": results})
// }

// // One ...
// func (ctrl ArticleController) One(c *gin.Context) {
// 	userID := getUserID(c)

// 	id := c.Param("id")

// 	getID, err := strconv.ParseInt(id, 10, 64)
// 	if getID == 0 || err != nil {
// 		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"Message": "Invalid parameter"})
// 		return
// 	}

// 	data, err := articleModel.One(userID, getID)
// 	if err != nil {
// 		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"Message": "Article not found"})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{"data": data})
// }

// // Update ...
// func (ctrl ArticleController) Update(c *gin.Context) {
// 	userID := getUserID(c)

// 	id := c.Param("id")

// 	getID, err := strconv.ParseInt(id, 10, 64)
// 	if getID == 0 || err != nil {
// 		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"Message": "Invalid parameter"})
// 		return
// 	}

// 	var request request.CreateArticleRequest

// 	if validationErr := c.ShouldBindJSON(&request); validationErr != nil {
// 		message := articleRequest.Create(validationErr)
// 		c.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"message": message})
// 		return
// 	}

// 	err = articleModel.Update(userID, getID, request)
// 	if err != nil {
// 		c.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"Message": "Article could not be updated"})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{"message": "Article updated"})
// }

// // Delete ...
// func (ctrl ArticleController) Delete(c *gin.Context) {
// 	userID := getUserID(c)

// 	id := c.Param("id")

// 	getID, err := strconv.ParseInt(id, 10, 64)
// 	if getID == 0 || err != nil {
// 		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"Message": "Invalid parameter"})
// 		return
// 	}

// 	err = articleModel.Delete(userID, getID)
// 	if err != nil {
// 		c.AbortWithStatusJSON(http.StatusNotAcceptable, gin.H{"Message": "Article could not be deleted"})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{"message": "Article deleted"})

// }
