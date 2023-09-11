package repository

import (
	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/controllers/response"
)

type UserRepository interface {
	// SELECT U.*,
	// F.FOLLOWER,
	// Q.TOTAL_QUESTION,
	// L.TOTAL_LECTURE,
	// R.RANKING,
	// CASE
	// 	WHEN F1.following_user_id IS NOT NULL THEN 1 ELSE 0 END AS FOLLOWED,
	// CASE
	// 	WHEN F2.followed_user_id IS NOT NULL THEN 1 ELSE 0 END AS FOLLOWING
	// FROM USERS U
	// LEFT JOIN (
	// 	SELECT followed_user_id, COUNT(*) AS FOLLOWER
	// 		FROM FOLLOWS
	// 		GROUP BY followed_user_id) F ON U.ID = F.followed_user_id
	// LEFT JOIN (
	// 	SELECT LA.USER_ID, COUNT(*) AS TOTAL_QUESTION FROM LESSON_ANSWERS LA
	// 		JOIN LESSONS LE ON LA.LESSON_ID = LE.ID
	// 	WHERE LE.TYPE = 'practice'
	// 	GROUP BY LA.USER_ID) Q ON U.ID = Q.USER_ID
	// LEFT JOIN (
	// 	SELECT LA.USER_ID,
	// 		COUNT(*) AS TOTAL_LECTURE
	// 	FROM LESSON_ANSWERS LA
	// 		JOIN LESSONS LE ON LA.LESSON_ID = LE.ID
	// 	WHERE LE.TYPE = 'lecture'
	// 	GROUP BY LA.USER_ID) L ON U.ID = L.USER_ID
	// LEFT JOIN (
	// 	SELECT ID,
	// 		RANK() OVER (
	// 			ORDER BY SCORE DESC
	// 		) AS RANKING
	// 	FROM USERS) R ON U.ID = R.ID
	// LEFT JOIN FOLLOWS F1 ON U.ID = F1.followed_user_id
	// AND F1.following_user_id = @id2
	// LEFT JOIN FOLLOWS F2 ON U.ID = F2.following_user_id
	// AND F2.followed_user_id = @id2
	// WHERE U.ID = @id1
	GetUserInfoByID(id1 uuid.UUID, id2 uuid.UUID) (response.UserInfo, error)
}
