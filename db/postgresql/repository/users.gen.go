// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package repository

import (
	"context"
	"strings"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"github.com/knailk/learning-platform/app/controllers/response"
	"github.com/knailk/learning-platform/app/domain/entity"

	"github.com/google/uuid"
)

func newUser(db *gorm.DB, opts ...gen.DOOption) user {
	_user := user{}

	_user.userDo.UseDB(db, opts...)
	_user.userDo.UseModel(&entity.User{})

	tableName := _user.userDo.TableName()
	_user.ALL = field.NewAsterisk(tableName)
	_user.ID = field.NewField(tableName, "id")
	_user.Email = field.NewString(tableName, "email")
	_user.Phone = field.NewString(tableName, "phone")
	_user.Name = field.NewString(tableName, "name")
	_user.Avatar = field.NewString(tableName, "avatar")
	_user.Birth = field.NewString(tableName, "birth")
	_user.Score = field.NewInt(tableName, "score")
	_user.CurrentLesson = field.NewField(tableName, "current_lesson")
	_user.Verified = field.NewBool(tableName, "verified")
	_user.UpdatedAt = field.NewTime(tableName, "updated_at")
	_user.CreatedAt = field.NewTime(tableName, "created_at")

	_user.fillFieldMap()

	return _user
}

type user struct {
	userDo userDo

	ALL           field.Asterisk
	ID            field.Field
	Email         field.String
	Phone         field.String
	Name          field.String
	Avatar        field.String
	Birth         field.String
	Score         field.Int
	CurrentLesson field.Field
	Verified      field.Bool
	UpdatedAt     field.Time
	CreatedAt     field.Time

	fieldMap map[string]field.Expr
}

func (u user) Table(newTableName string) *user {
	u.userDo.UseTable(newTableName)
	return u.updateTableName(newTableName)
}

func (u user) As(alias string) *user {
	u.userDo.DO = *(u.userDo.As(alias).(*gen.DO))
	return u.updateTableName(alias)
}

func (u *user) updateTableName(table string) *user {
	u.ALL = field.NewAsterisk(table)
	u.ID = field.NewField(table, "id")
	u.Email = field.NewString(table, "email")
	u.Phone = field.NewString(table, "phone")
	u.Name = field.NewString(table, "name")
	u.Avatar = field.NewString(table, "avatar")
	u.Birth = field.NewString(table, "birth")
	u.Score = field.NewInt(table, "score")
	u.CurrentLesson = field.NewField(table, "current_lesson")
	u.Verified = field.NewBool(table, "verified")
	u.UpdatedAt = field.NewTime(table, "updated_at")
	u.CreatedAt = field.NewTime(table, "created_at")

	u.fillFieldMap()

	return u
}

func (u *user) WithContext(ctx context.Context) IUserDo { return u.userDo.WithContext(ctx) }

func (u user) TableName() string { return u.userDo.TableName() }

func (u user) Alias() string { return u.userDo.Alias() }

func (u user) Columns(cols ...field.Expr) gen.Columns { return u.userDo.Columns(cols...) }

func (u *user) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := u.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (u *user) fillFieldMap() {
	u.fieldMap = make(map[string]field.Expr, 11)
	u.fieldMap["id"] = u.ID
	u.fieldMap["email"] = u.Email
	u.fieldMap["phone"] = u.Phone
	u.fieldMap["name"] = u.Name
	u.fieldMap["avatar"] = u.Avatar
	u.fieldMap["birth"] = u.Birth
	u.fieldMap["score"] = u.Score
	u.fieldMap["current_lesson"] = u.CurrentLesson
	u.fieldMap["verified"] = u.Verified
	u.fieldMap["updated_at"] = u.UpdatedAt
	u.fieldMap["created_at"] = u.CreatedAt
}

func (u user) clone(db *gorm.DB) user {
	u.userDo.ReplaceConnPool(db.Statement.ConnPool)
	return u
}

func (u user) replaceDB(db *gorm.DB) user {
	u.userDo.ReplaceDB(db)
	return u
}

type userDo struct{ gen.DO }

type IUserDo interface {
	gen.SubQuery
	Debug() IUserDo
	WithContext(ctx context.Context) IUserDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IUserDo
	WriteDB() IUserDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IUserDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IUserDo
	Not(conds ...gen.Condition) IUserDo
	Or(conds ...gen.Condition) IUserDo
	Select(conds ...field.Expr) IUserDo
	Where(conds ...gen.Condition) IUserDo
	Order(conds ...field.Expr) IUserDo
	Distinct(cols ...field.Expr) IUserDo
	Omit(cols ...field.Expr) IUserDo
	Join(table schema.Tabler, on ...field.Expr) IUserDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IUserDo
	RightJoin(table schema.Tabler, on ...field.Expr) IUserDo
	Group(cols ...field.Expr) IUserDo
	Having(conds ...gen.Condition) IUserDo
	Limit(limit int) IUserDo
	Offset(offset int) IUserDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IUserDo
	Unscoped() IUserDo
	Create(values ...*entity.User) error
	CreateInBatches(values []*entity.User, batchSize int) error
	Save(values ...*entity.User) error
	First() (*entity.User, error)
	Take() (*entity.User, error)
	Last() (*entity.User, error)
	Find() ([]*entity.User, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.User, err error)
	FindInBatches(result *[]*entity.User, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.User) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IUserDo
	Assign(attrs ...field.AssignExpr) IUserDo
	Joins(fields ...field.RelationField) IUserDo
	Preload(fields ...field.RelationField) IUserDo
	FirstOrInit() (*entity.User, error)
	FirstOrCreate() (*entity.User, error)
	FindByPage(offset int, limit int) (result []*entity.User, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IUserDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetUserInfoByID(id1 uuid.UUID, id2 uuid.UUID) (result response.UserInfo, err error)
}

// SELECT U.*,
// F.FOLLOWER,
// Q.TOTAL_QUESTION,
// L.TOTAL_LECTURE,
// R.RANKING,
// CASE
//
//	WHEN F1.following_user_id IS NOT NULL THEN 1 ELSE 0 END AS FOLLOWED,
//
// CASE
//
//	WHEN F2.followed_user_id IS NOT NULL THEN 1 ELSE 0 END AS FOLLOWING
//
// FROM USERS U
// LEFT JOIN (
//
//	SELECT followed_user_id, COUNT(*) AS FOLLOWER
//		FROM FOLLOWS
//		GROUP BY followed_user_id) F ON U.ID = F.followed_user_id
//
// LEFT JOIN (
//
//	SELECT LA.USER_ID, COUNT(*) AS TOTAL_QUESTION FROM LESSON_ANSWERS LA
//		JOIN LESSONS LE ON LA.LESSON_ID = LE.ID
//	WHERE LE.TYPE = 'practice'
//	GROUP BY LA.USER_ID) Q ON U.ID = Q.USER_ID
//
// LEFT JOIN (
//
//	SELECT LA.USER_ID,
//		COUNT(*) AS TOTAL_LECTURE
//	FROM LESSON_ANSWERS LA
//		JOIN LESSONS LE ON LA.LESSON_ID = LE.ID
//	WHERE LE.TYPE = 'lecture'
//	GROUP BY LA.USER_ID) L ON U.ID = L.USER_ID
//
// LEFT JOIN (
//
//	SELECT ID,
//		RANK() OVER (
//			ORDER BY SCORE DESC
//		) AS RANKING
//	FROM USERS) R ON U.ID = R.ID
//
// LEFT JOIN FOLLOWS F1 ON U.ID = F1.followed_user_id
// AND F1.following_user_id = @id2
// LEFT JOIN FOLLOWS F2 ON U.ID = F2.following_user_id
// AND F2.followed_user_id = @id2
// WHERE U.ID = @id1
func (u userDo) GetUserInfoByID(id1 uuid.UUID, id2 uuid.UUID) (result response.UserInfo, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	params = append(params, id2)
	params = append(params, id2)
	params = append(params, id1)
	generateSQL.WriteString("SELECT U.*, F.FOLLOWER, Q.TOTAL_QUESTION, L.TOTAL_LECTURE, R.RANKING, CASE WHEN F1.following_user_id IS NOT NULL THEN 1 ELSE 0 END AS FOLLOWED, CASE WHEN F2.followed_user_id IS NOT NULL THEN 1 ELSE 0 END AS FOLLOWING FROM USERS U LEFT JOIN ( SELECT followed_user_id, COUNT(*) AS FOLLOWER FROM FOLLOWS GROUP BY followed_user_id) F ON U.ID = F.followed_user_id LEFT JOIN ( SELECT LA.USER_ID, COUNT(*) AS TOTAL_QUESTION FROM LESSON_ANSWERS LA JOIN LESSONS LE ON LA.LESSON_ID = LE.ID WHERE LE.TYPE = 'practice' GROUP BY LA.USER_ID) Q ON U.ID = Q.USER_ID LEFT JOIN ( SELECT LA.USER_ID, COUNT(*) AS TOTAL_LECTURE FROM LESSON_ANSWERS LA JOIN LESSONS LE ON LA.LESSON_ID = LE.ID WHERE LE.TYPE = 'lecture' GROUP BY LA.USER_ID) L ON U.ID = L.USER_ID LEFT JOIN ( SELECT ID, RANK() OVER ( ORDER BY SCORE DESC ) AS RANKING FROM USERS) R ON U.ID = R.ID LEFT JOIN FOLLOWS F1 ON U.ID = F1.followed_user_id AND F1.following_user_id = ? LEFT JOIN FOLLOWS F2 ON U.ID = F2.following_user_id AND F2.followed_user_id = ? WHERE U.ID = ? ")

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (u userDo) Debug() IUserDo {
	return u.withDO(u.DO.Debug())
}

func (u userDo) WithContext(ctx context.Context) IUserDo {
	return u.withDO(u.DO.WithContext(ctx))
}

func (u userDo) ReadDB() IUserDo {
	return u.Clauses(dbresolver.Read)
}

func (u userDo) WriteDB() IUserDo {
	return u.Clauses(dbresolver.Write)
}

func (u userDo) Session(config *gorm.Session) IUserDo {
	return u.withDO(u.DO.Session(config))
}

func (u userDo) Clauses(conds ...clause.Expression) IUserDo {
	return u.withDO(u.DO.Clauses(conds...))
}

func (u userDo) Returning(value interface{}, columns ...string) IUserDo {
	return u.withDO(u.DO.Returning(value, columns...))
}

func (u userDo) Not(conds ...gen.Condition) IUserDo {
	return u.withDO(u.DO.Not(conds...))
}

func (u userDo) Or(conds ...gen.Condition) IUserDo {
	return u.withDO(u.DO.Or(conds...))
}

func (u userDo) Select(conds ...field.Expr) IUserDo {
	return u.withDO(u.DO.Select(conds...))
}

func (u userDo) Where(conds ...gen.Condition) IUserDo {
	return u.withDO(u.DO.Where(conds...))
}

func (u userDo) Order(conds ...field.Expr) IUserDo {
	return u.withDO(u.DO.Order(conds...))
}

func (u userDo) Distinct(cols ...field.Expr) IUserDo {
	return u.withDO(u.DO.Distinct(cols...))
}

func (u userDo) Omit(cols ...field.Expr) IUserDo {
	return u.withDO(u.DO.Omit(cols...))
}

func (u userDo) Join(table schema.Tabler, on ...field.Expr) IUserDo {
	return u.withDO(u.DO.Join(table, on...))
}

func (u userDo) LeftJoin(table schema.Tabler, on ...field.Expr) IUserDo {
	return u.withDO(u.DO.LeftJoin(table, on...))
}

func (u userDo) RightJoin(table schema.Tabler, on ...field.Expr) IUserDo {
	return u.withDO(u.DO.RightJoin(table, on...))
}

func (u userDo) Group(cols ...field.Expr) IUserDo {
	return u.withDO(u.DO.Group(cols...))
}

func (u userDo) Having(conds ...gen.Condition) IUserDo {
	return u.withDO(u.DO.Having(conds...))
}

func (u userDo) Limit(limit int) IUserDo {
	return u.withDO(u.DO.Limit(limit))
}

func (u userDo) Offset(offset int) IUserDo {
	return u.withDO(u.DO.Offset(offset))
}

func (u userDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IUserDo {
	return u.withDO(u.DO.Scopes(funcs...))
}

func (u userDo) Unscoped() IUserDo {
	return u.withDO(u.DO.Unscoped())
}

func (u userDo) Create(values ...*entity.User) error {
	if len(values) == 0 {
		return nil
	}
	return u.DO.Create(values)
}

func (u userDo) CreateInBatches(values []*entity.User, batchSize int) error {
	return u.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (u userDo) Save(values ...*entity.User) error {
	if len(values) == 0 {
		return nil
	}
	return u.DO.Save(values)
}

func (u userDo) First() (*entity.User, error) {
	if result, err := u.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.User), nil
	}
}

func (u userDo) Take() (*entity.User, error) {
	if result, err := u.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.User), nil
	}
}

func (u userDo) Last() (*entity.User, error) {
	if result, err := u.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.User), nil
	}
}

func (u userDo) Find() ([]*entity.User, error) {
	result, err := u.DO.Find()
	return result.([]*entity.User), err
}

func (u userDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.User, err error) {
	buf := make([]*entity.User, 0, batchSize)
	err = u.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (u userDo) FindInBatches(result *[]*entity.User, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return u.DO.FindInBatches(result, batchSize, fc)
}

func (u userDo) Attrs(attrs ...field.AssignExpr) IUserDo {
	return u.withDO(u.DO.Attrs(attrs...))
}

func (u userDo) Assign(attrs ...field.AssignExpr) IUserDo {
	return u.withDO(u.DO.Assign(attrs...))
}

func (u userDo) Joins(fields ...field.RelationField) IUserDo {
	for _, _f := range fields {
		u = *u.withDO(u.DO.Joins(_f))
	}
	return &u
}

func (u userDo) Preload(fields ...field.RelationField) IUserDo {
	for _, _f := range fields {
		u = *u.withDO(u.DO.Preload(_f))
	}
	return &u
}

func (u userDo) FirstOrInit() (*entity.User, error) {
	if result, err := u.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.User), nil
	}
}

func (u userDo) FirstOrCreate() (*entity.User, error) {
	if result, err := u.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.User), nil
	}
}

func (u userDo) FindByPage(offset int, limit int) (result []*entity.User, count int64, err error) {
	result, err = u.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = u.Offset(-1).Limit(-1).Count()
	return
}

func (u userDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = u.Count()
	if err != nil {
		return
	}

	err = u.Offset(offset).Limit(limit).Scan(result)
	return
}

func (u userDo) Scan(result interface{}) (err error) {
	return u.DO.Scan(result)
}

func (u userDo) Delete(models ...*entity.User) (result gen.ResultInfo, err error) {
	return u.DO.Delete(models)
}

func (u *userDo) withDO(do gen.Dao) *userDo {
	u.DO = *do.(*gen.DO)
	return u
}
