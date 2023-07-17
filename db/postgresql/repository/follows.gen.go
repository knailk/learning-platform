// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package repository

import (
	"context"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"github.com/knailk/learning-platform/app/entity"
)

func newFollow(db *gorm.DB, opts ...gen.DOOption) follow {
	_follow := follow{}

	_follow.followDo.UseDB(db, opts...)
	_follow.followDo.UseModel(&entity.Follow{})

	tableName := _follow.followDo.TableName()
	_follow.ALL = field.NewAsterisk(tableName)
	_follow.FollowingUserID = field.NewField(tableName, "following_user_id")
	_follow.FollowedUserID = field.NewField(tableName, "followed_user_id")
	_follow.CreatedAt = field.NewTime(tableName, "created_at")
	_follow.UpdatedAt = field.NewTime(tableName, "updated_at")

	_follow.fillFieldMap()

	return _follow
}

type follow struct {
	followDo followDo

	ALL             field.Asterisk
	FollowingUserID field.Field
	FollowedUserID  field.Field
	CreatedAt       field.Time
	UpdatedAt       field.Time

	fieldMap map[string]field.Expr
}

func (f follow) Table(newTableName string) *follow {
	f.followDo.UseTable(newTableName)
	return f.updateTableName(newTableName)
}

func (f follow) As(alias string) *follow {
	f.followDo.DO = *(f.followDo.As(alias).(*gen.DO))
	return f.updateTableName(alias)
}

func (f *follow) updateTableName(table string) *follow {
	f.ALL = field.NewAsterisk(table)
	f.FollowingUserID = field.NewField(table, "following_user_id")
	f.FollowedUserID = field.NewField(table, "followed_user_id")
	f.CreatedAt = field.NewTime(table, "created_at")
	f.UpdatedAt = field.NewTime(table, "updated_at")

	f.fillFieldMap()

	return f
}

func (f *follow) WithContext(ctx context.Context) IFollowDo { return f.followDo.WithContext(ctx) }

func (f follow) TableName() string { return f.followDo.TableName() }

func (f follow) Alias() string { return f.followDo.Alias() }

func (f follow) Columns(cols ...field.Expr) gen.Columns { return f.followDo.Columns(cols...) }

func (f *follow) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := f.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (f *follow) fillFieldMap() {
	f.fieldMap = make(map[string]field.Expr, 4)
	f.fieldMap["following_user_id"] = f.FollowingUserID
	f.fieldMap["followed_user_id"] = f.FollowedUserID
	f.fieldMap["created_at"] = f.CreatedAt
	f.fieldMap["updated_at"] = f.UpdatedAt
}

func (f follow) clone(db *gorm.DB) follow {
	f.followDo.ReplaceConnPool(db.Statement.ConnPool)
	return f
}

func (f follow) replaceDB(db *gorm.DB) follow {
	f.followDo.ReplaceDB(db)
	return f
}

type followDo struct{ gen.DO }

type IFollowDo interface {
	gen.SubQuery
	Debug() IFollowDo
	WithContext(ctx context.Context) IFollowDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IFollowDo
	WriteDB() IFollowDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IFollowDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IFollowDo
	Not(conds ...gen.Condition) IFollowDo
	Or(conds ...gen.Condition) IFollowDo
	Select(conds ...field.Expr) IFollowDo
	Where(conds ...gen.Condition) IFollowDo
	Order(conds ...field.Expr) IFollowDo
	Distinct(cols ...field.Expr) IFollowDo
	Omit(cols ...field.Expr) IFollowDo
	Join(table schema.Tabler, on ...field.Expr) IFollowDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IFollowDo
	RightJoin(table schema.Tabler, on ...field.Expr) IFollowDo
	Group(cols ...field.Expr) IFollowDo
	Having(conds ...gen.Condition) IFollowDo
	Limit(limit int) IFollowDo
	Offset(offset int) IFollowDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IFollowDo
	Unscoped() IFollowDo
	Create(values ...*entity.Follow) error
	CreateInBatches(values []*entity.Follow, batchSize int) error
	Save(values ...*entity.Follow) error
	First() (*entity.Follow, error)
	Take() (*entity.Follow, error)
	Last() (*entity.Follow, error)
	Find() ([]*entity.Follow, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Follow, err error)
	FindInBatches(result *[]*entity.Follow, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.Follow) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IFollowDo
	Assign(attrs ...field.AssignExpr) IFollowDo
	Joins(fields ...field.RelationField) IFollowDo
	Preload(fields ...field.RelationField) IFollowDo
	FirstOrInit() (*entity.Follow, error)
	FirstOrCreate() (*entity.Follow, error)
	FindByPage(offset int, limit int) (result []*entity.Follow, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IFollowDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (f followDo) Debug() IFollowDo {
	return f.withDO(f.DO.Debug())
}

func (f followDo) WithContext(ctx context.Context) IFollowDo {
	return f.withDO(f.DO.WithContext(ctx))
}

func (f followDo) ReadDB() IFollowDo {
	return f.Clauses(dbresolver.Read)
}

func (f followDo) WriteDB() IFollowDo {
	return f.Clauses(dbresolver.Write)
}

func (f followDo) Session(config *gorm.Session) IFollowDo {
	return f.withDO(f.DO.Session(config))
}

func (f followDo) Clauses(conds ...clause.Expression) IFollowDo {
	return f.withDO(f.DO.Clauses(conds...))
}

func (f followDo) Returning(value interface{}, columns ...string) IFollowDo {
	return f.withDO(f.DO.Returning(value, columns...))
}

func (f followDo) Not(conds ...gen.Condition) IFollowDo {
	return f.withDO(f.DO.Not(conds...))
}

func (f followDo) Or(conds ...gen.Condition) IFollowDo {
	return f.withDO(f.DO.Or(conds...))
}

func (f followDo) Select(conds ...field.Expr) IFollowDo {
	return f.withDO(f.DO.Select(conds...))
}

func (f followDo) Where(conds ...gen.Condition) IFollowDo {
	return f.withDO(f.DO.Where(conds...))
}

func (f followDo) Order(conds ...field.Expr) IFollowDo {
	return f.withDO(f.DO.Order(conds...))
}

func (f followDo) Distinct(cols ...field.Expr) IFollowDo {
	return f.withDO(f.DO.Distinct(cols...))
}

func (f followDo) Omit(cols ...field.Expr) IFollowDo {
	return f.withDO(f.DO.Omit(cols...))
}

func (f followDo) Join(table schema.Tabler, on ...field.Expr) IFollowDo {
	return f.withDO(f.DO.Join(table, on...))
}

func (f followDo) LeftJoin(table schema.Tabler, on ...field.Expr) IFollowDo {
	return f.withDO(f.DO.LeftJoin(table, on...))
}

func (f followDo) RightJoin(table schema.Tabler, on ...field.Expr) IFollowDo {
	return f.withDO(f.DO.RightJoin(table, on...))
}

func (f followDo) Group(cols ...field.Expr) IFollowDo {
	return f.withDO(f.DO.Group(cols...))
}

func (f followDo) Having(conds ...gen.Condition) IFollowDo {
	return f.withDO(f.DO.Having(conds...))
}

func (f followDo) Limit(limit int) IFollowDo {
	return f.withDO(f.DO.Limit(limit))
}

func (f followDo) Offset(offset int) IFollowDo {
	return f.withDO(f.DO.Offset(offset))
}

func (f followDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IFollowDo {
	return f.withDO(f.DO.Scopes(funcs...))
}

func (f followDo) Unscoped() IFollowDo {
	return f.withDO(f.DO.Unscoped())
}

func (f followDo) Create(values ...*entity.Follow) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Create(values)
}

func (f followDo) CreateInBatches(values []*entity.Follow, batchSize int) error {
	return f.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (f followDo) Save(values ...*entity.Follow) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Save(values)
}

func (f followDo) First() (*entity.Follow, error) {
	if result, err := f.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Follow), nil
	}
}

func (f followDo) Take() (*entity.Follow, error) {
	if result, err := f.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Follow), nil
	}
}

func (f followDo) Last() (*entity.Follow, error) {
	if result, err := f.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Follow), nil
	}
}

func (f followDo) Find() ([]*entity.Follow, error) {
	result, err := f.DO.Find()
	return result.([]*entity.Follow), err
}

func (f followDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Follow, err error) {
	buf := make([]*entity.Follow, 0, batchSize)
	err = f.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (f followDo) FindInBatches(result *[]*entity.Follow, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return f.DO.FindInBatches(result, batchSize, fc)
}

func (f followDo) Attrs(attrs ...field.AssignExpr) IFollowDo {
	return f.withDO(f.DO.Attrs(attrs...))
}

func (f followDo) Assign(attrs ...field.AssignExpr) IFollowDo {
	return f.withDO(f.DO.Assign(attrs...))
}

func (f followDo) Joins(fields ...field.RelationField) IFollowDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Joins(_f))
	}
	return &f
}

func (f followDo) Preload(fields ...field.RelationField) IFollowDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Preload(_f))
	}
	return &f
}

func (f followDo) FirstOrInit() (*entity.Follow, error) {
	if result, err := f.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Follow), nil
	}
}

func (f followDo) FirstOrCreate() (*entity.Follow, error) {
	if result, err := f.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Follow), nil
	}
}

func (f followDo) FindByPage(offset int, limit int) (result []*entity.Follow, count int64, err error) {
	result, err = f.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = f.Offset(-1).Limit(-1).Count()
	return
}

func (f followDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = f.Count()
	if err != nil {
		return
	}

	err = f.Offset(offset).Limit(limit).Scan(result)
	return
}

func (f followDo) Scan(result interface{}) (err error) {
	return f.DO.Scan(result)
}

func (f followDo) Delete(models ...*entity.Follow) (result gen.ResultInfo, err error) {
	return f.DO.Delete(models)
}

func (f *followDo) withDO(do gen.Dao) *followDo {
	f.DO = *do.(*gen.DO)
	return f
}
