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

func newRank(db *gorm.DB, opts ...gen.DOOption) rank {
	_rank := rank{}

	_rank.rankDo.UseDB(db, opts...)
	_rank.rankDo.UseModel(&entity.Rank{})

	tableName := _rank.rankDo.TableName()
	_rank.ALL = field.NewAsterisk(tableName)
	_rank.ID = field.NewField(tableName, "id")
	_rank.UserID = field.NewField(tableName, "user_id")
	_rank.Before = field.NewInt(tableName, "before")
	_rank.UpdatedAt = field.NewTime(tableName, "updated_at")
	_rank.CreatedAt = field.NewTime(tableName, "created_at")

	_rank.fillFieldMap()

	return _rank
}

type rank struct {
	rankDo rankDo

	ALL       field.Asterisk
	ID        field.Field
	UserID    field.Field
	Before    field.Int
	UpdatedAt field.Time
	CreatedAt field.Time

	fieldMap map[string]field.Expr
}

func (r rank) Table(newTableName string) *rank {
	r.rankDo.UseTable(newTableName)
	return r.updateTableName(newTableName)
}

func (r rank) As(alias string) *rank {
	r.rankDo.DO = *(r.rankDo.As(alias).(*gen.DO))
	return r.updateTableName(alias)
}

func (r *rank) updateTableName(table string) *rank {
	r.ALL = field.NewAsterisk(table)
	r.ID = field.NewField(table, "id")
	r.UserID = field.NewField(table, "user_id")
	r.Before = field.NewInt(table, "before")
	r.UpdatedAt = field.NewTime(table, "updated_at")
	r.CreatedAt = field.NewTime(table, "created_at")

	r.fillFieldMap()

	return r
}

func (r *rank) WithContext(ctx context.Context) IRankDo { return r.rankDo.WithContext(ctx) }

func (r rank) TableName() string { return r.rankDo.TableName() }

func (r rank) Alias() string { return r.rankDo.Alias() }

func (r rank) Columns(cols ...field.Expr) gen.Columns { return r.rankDo.Columns(cols...) }

func (r *rank) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := r.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (r *rank) fillFieldMap() {
	r.fieldMap = make(map[string]field.Expr, 5)
	r.fieldMap["id"] = r.ID
	r.fieldMap["user_id"] = r.UserID
	r.fieldMap["before"] = r.Before
	r.fieldMap["updated_at"] = r.UpdatedAt
	r.fieldMap["created_at"] = r.CreatedAt
}

func (r rank) clone(db *gorm.DB) rank {
	r.rankDo.ReplaceConnPool(db.Statement.ConnPool)
	return r
}

func (r rank) replaceDB(db *gorm.DB) rank {
	r.rankDo.ReplaceDB(db)
	return r
}

type rankDo struct{ gen.DO }

type IRankDo interface {
	gen.SubQuery
	Debug() IRankDo
	WithContext(ctx context.Context) IRankDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IRankDo
	WriteDB() IRankDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IRankDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IRankDo
	Not(conds ...gen.Condition) IRankDo
	Or(conds ...gen.Condition) IRankDo
	Select(conds ...field.Expr) IRankDo
	Where(conds ...gen.Condition) IRankDo
	Order(conds ...field.Expr) IRankDo
	Distinct(cols ...field.Expr) IRankDo
	Omit(cols ...field.Expr) IRankDo
	Join(table schema.Tabler, on ...field.Expr) IRankDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IRankDo
	RightJoin(table schema.Tabler, on ...field.Expr) IRankDo
	Group(cols ...field.Expr) IRankDo
	Having(conds ...gen.Condition) IRankDo
	Limit(limit int) IRankDo
	Offset(offset int) IRankDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IRankDo
	Unscoped() IRankDo
	Create(values ...*entity.Rank) error
	CreateInBatches(values []*entity.Rank, batchSize int) error
	Save(values ...*entity.Rank) error
	First() (*entity.Rank, error)
	Take() (*entity.Rank, error)
	Last() (*entity.Rank, error)
	Find() ([]*entity.Rank, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Rank, err error)
	FindInBatches(result *[]*entity.Rank, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.Rank) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IRankDo
	Assign(attrs ...field.AssignExpr) IRankDo
	Joins(fields ...field.RelationField) IRankDo
	Preload(fields ...field.RelationField) IRankDo
	FirstOrInit() (*entity.Rank, error)
	FirstOrCreate() (*entity.Rank, error)
	FindByPage(offset int, limit int) (result []*entity.Rank, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IRankDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (r rankDo) Debug() IRankDo {
	return r.withDO(r.DO.Debug())
}

func (r rankDo) WithContext(ctx context.Context) IRankDo {
	return r.withDO(r.DO.WithContext(ctx))
}

func (r rankDo) ReadDB() IRankDo {
	return r.Clauses(dbresolver.Read)
}

func (r rankDo) WriteDB() IRankDo {
	return r.Clauses(dbresolver.Write)
}

func (r rankDo) Session(config *gorm.Session) IRankDo {
	return r.withDO(r.DO.Session(config))
}

func (r rankDo) Clauses(conds ...clause.Expression) IRankDo {
	return r.withDO(r.DO.Clauses(conds...))
}

func (r rankDo) Returning(value interface{}, columns ...string) IRankDo {
	return r.withDO(r.DO.Returning(value, columns...))
}

func (r rankDo) Not(conds ...gen.Condition) IRankDo {
	return r.withDO(r.DO.Not(conds...))
}

func (r rankDo) Or(conds ...gen.Condition) IRankDo {
	return r.withDO(r.DO.Or(conds...))
}

func (r rankDo) Select(conds ...field.Expr) IRankDo {
	return r.withDO(r.DO.Select(conds...))
}

func (r rankDo) Where(conds ...gen.Condition) IRankDo {
	return r.withDO(r.DO.Where(conds...))
}

func (r rankDo) Order(conds ...field.Expr) IRankDo {
	return r.withDO(r.DO.Order(conds...))
}

func (r rankDo) Distinct(cols ...field.Expr) IRankDo {
	return r.withDO(r.DO.Distinct(cols...))
}

func (r rankDo) Omit(cols ...field.Expr) IRankDo {
	return r.withDO(r.DO.Omit(cols...))
}

func (r rankDo) Join(table schema.Tabler, on ...field.Expr) IRankDo {
	return r.withDO(r.DO.Join(table, on...))
}

func (r rankDo) LeftJoin(table schema.Tabler, on ...field.Expr) IRankDo {
	return r.withDO(r.DO.LeftJoin(table, on...))
}

func (r rankDo) RightJoin(table schema.Tabler, on ...field.Expr) IRankDo {
	return r.withDO(r.DO.RightJoin(table, on...))
}

func (r rankDo) Group(cols ...field.Expr) IRankDo {
	return r.withDO(r.DO.Group(cols...))
}

func (r rankDo) Having(conds ...gen.Condition) IRankDo {
	return r.withDO(r.DO.Having(conds...))
}

func (r rankDo) Limit(limit int) IRankDo {
	return r.withDO(r.DO.Limit(limit))
}

func (r rankDo) Offset(offset int) IRankDo {
	return r.withDO(r.DO.Offset(offset))
}

func (r rankDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IRankDo {
	return r.withDO(r.DO.Scopes(funcs...))
}

func (r rankDo) Unscoped() IRankDo {
	return r.withDO(r.DO.Unscoped())
}

func (r rankDo) Create(values ...*entity.Rank) error {
	if len(values) == 0 {
		return nil
	}
	return r.DO.Create(values)
}

func (r rankDo) CreateInBatches(values []*entity.Rank, batchSize int) error {
	return r.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (r rankDo) Save(values ...*entity.Rank) error {
	if len(values) == 0 {
		return nil
	}
	return r.DO.Save(values)
}

func (r rankDo) First() (*entity.Rank, error) {
	if result, err := r.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Rank), nil
	}
}

func (r rankDo) Take() (*entity.Rank, error) {
	if result, err := r.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Rank), nil
	}
}

func (r rankDo) Last() (*entity.Rank, error) {
	if result, err := r.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Rank), nil
	}
}

func (r rankDo) Find() ([]*entity.Rank, error) {
	result, err := r.DO.Find()
	return result.([]*entity.Rank), err
}

func (r rankDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Rank, err error) {
	buf := make([]*entity.Rank, 0, batchSize)
	err = r.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (r rankDo) FindInBatches(result *[]*entity.Rank, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return r.DO.FindInBatches(result, batchSize, fc)
}

func (r rankDo) Attrs(attrs ...field.AssignExpr) IRankDo {
	return r.withDO(r.DO.Attrs(attrs...))
}

func (r rankDo) Assign(attrs ...field.AssignExpr) IRankDo {
	return r.withDO(r.DO.Assign(attrs...))
}

func (r rankDo) Joins(fields ...field.RelationField) IRankDo {
	for _, _f := range fields {
		r = *r.withDO(r.DO.Joins(_f))
	}
	return &r
}

func (r rankDo) Preload(fields ...field.RelationField) IRankDo {
	for _, _f := range fields {
		r = *r.withDO(r.DO.Preload(_f))
	}
	return &r
}

func (r rankDo) FirstOrInit() (*entity.Rank, error) {
	if result, err := r.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Rank), nil
	}
}

func (r rankDo) FirstOrCreate() (*entity.Rank, error) {
	if result, err := r.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Rank), nil
	}
}

func (r rankDo) FindByPage(offset int, limit int) (result []*entity.Rank, count int64, err error) {
	result, err = r.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = r.Offset(-1).Limit(-1).Count()
	return
}

func (r rankDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = r.Count()
	if err != nil {
		return
	}

	err = r.Offset(offset).Limit(limit).Scan(result)
	return
}

func (r rankDo) Scan(result interface{}) (err error) {
	return r.DO.Scan(result)
}

func (r rankDo) Delete(models ...*entity.Rank) (result gen.ResultInfo, err error) {
	return r.DO.Delete(models)
}

func (r *rankDo) withDO(do gen.Dao) *rankDo {
	r.DO = *do.(*gen.DO)
	return r
}
