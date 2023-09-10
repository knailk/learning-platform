package repository

import (
	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/controllers/response"
)

type UserRepository interface {
	// 	SELECT U.*,
	// 	F.FOLLOWER,
	// 	Q.TOTAL_QUESTION,
	// 	L.TOTAL_LECTURE,
	// 	R.RANKING
	// FROM USERS U
	// LEFT JOIN
	// 	(SELECT FOLLOWED_USER_ID,
	// 			COUNT(*) AS FOLLOWER
	// 		FROM FOLLOWS
	// 		GROUP BY FOLLOWED_USER_ID) F ON U.ID = F.FOLLOWED_USER_ID
	// LEFT JOIN
	// 	(SELECT LA.USER_ID,
	// 			COUNT(*) AS TOTAL_QUESTION
	// 		FROM LESSON_ANSWERS LA
	// 		JOIN LESSONS LE ON LA.LESSON_ID = LE.ID
	// 		WHERE LE.TYPE = 'practice'
	// 		GROUP BY LA.USER_ID) Q ON U.ID = Q.USER_ID
	// LEFT JOIN
	// 	(SELECT LA.USER_ID,
	// 			COUNT(*) AS TOTAL_LECTURE
	// 		FROM LESSON_ANSWERS LA
	// 		JOIN LESSONS LE ON LA.LESSON_ID = LE.ID
	// 		WHERE LE.TYPE = 'lecture'
	// 		GROUP BY LA.USER_ID) L ON U.ID = L.USER_ID
	// LEFT JOIN
	// 	(SELECT ID,
	// 			RANK() OVER (ORDER BY SCORE DESC) AS RANKING
	// 		FROM USERS) R ON U.ID = R.ID
	// WHERE U.ID = @id
	GetUserInfoByID(id uuid.UUID) (response.UserInfo, error)
}