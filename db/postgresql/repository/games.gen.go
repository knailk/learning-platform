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

	"github.com/knailk/learning-platform/app/domain/entity"
)

func newGame(db *gorm.DB, opts ...gen.DOOption) game {
	_game := game{}

	_game.gameDo.UseDB(db, opts...)
	_game.gameDo.UseModel(&entity.Game{})

	tableName := _game.gameDo.TableName()
	_game.ALL = field.NewAsterisk(tableName)
	_game.ID = field.NewField(tableName, "id")
	_game.Title = field.NewString(tableName, "title")
	_game.Level = field.NewInt(tableName, "level")
	_game.Score = field.NewInt(tableName, "score")
	_game.UpdatedAt = field.NewTime(tableName, "updated_at")
	_game.CreatedAt = field.NewTime(tableName, "created_at")

	_game.fillFieldMap()

	return _game
}

type game struct {
	gameDo gameDo

	ALL       field.Asterisk
	ID        field.Field
	Title     field.String
	Level     field.Int
	Score     field.Int
	UpdatedAt field.Time
	CreatedAt field.Time

	fieldMap map[string]field.Expr
}

func (g game) Table(newTableName string) *game {
	g.gameDo.UseTable(newTableName)
	return g.updateTableName(newTableName)
}

func (g game) As(alias string) *game {
	g.gameDo.DO = *(g.gameDo.As(alias).(*gen.DO))
	return g.updateTableName(alias)
}

func (g *game) updateTableName(table string) *game {
	g.ALL = field.NewAsterisk(table)
	g.ID = field.NewField(table, "id")
	g.Title = field.NewString(table, "title")
	g.Level = field.NewInt(table, "level")
	g.Score = field.NewInt(table, "score")
	g.UpdatedAt = field.NewTime(table, "updated_at")
	g.CreatedAt = field.NewTime(table, "created_at")

	g.fillFieldMap()

	return g
}

func (g *game) WithContext(ctx context.Context) IGameDo { return g.gameDo.WithContext(ctx) }

func (g game) TableName() string { return g.gameDo.TableName() }

func (g game) Alias() string { return g.gameDo.Alias() }

func (g game) Columns(cols ...field.Expr) gen.Columns { return g.gameDo.Columns(cols...) }

func (g *game) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := g.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (g *game) fillFieldMap() {
	g.fieldMap = make(map[string]field.Expr, 6)
	g.fieldMap["id"] = g.ID
	g.fieldMap["title"] = g.Title
	g.fieldMap["level"] = g.Level
	g.fieldMap["score"] = g.Score
	g.fieldMap["updated_at"] = g.UpdatedAt
	g.fieldMap["created_at"] = g.CreatedAt
}

func (g game) clone(db *gorm.DB) game {
	g.gameDo.ReplaceConnPool(db.Statement.ConnPool)
	return g
}

func (g game) replaceDB(db *gorm.DB) game {
	g.gameDo.ReplaceDB(db)
	return g
}

type gameDo struct{ gen.DO }

type IGameDo interface {
	gen.SubQuery
	Debug() IGameDo
	WithContext(ctx context.Context) IGameDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IGameDo
	WriteDB() IGameDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IGameDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IGameDo
	Not(conds ...gen.Condition) IGameDo
	Or(conds ...gen.Condition) IGameDo
	Select(conds ...field.Expr) IGameDo
	Where(conds ...gen.Condition) IGameDo
	Order(conds ...field.Expr) IGameDo
	Distinct(cols ...field.Expr) IGameDo
	Omit(cols ...field.Expr) IGameDo
	Join(table schema.Tabler, on ...field.Expr) IGameDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IGameDo
	RightJoin(table schema.Tabler, on ...field.Expr) IGameDo
	Group(cols ...field.Expr) IGameDo
	Having(conds ...gen.Condition) IGameDo
	Limit(limit int) IGameDo
	Offset(offset int) IGameDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IGameDo
	Unscoped() IGameDo
	Create(values ...*entity.Game) error
	CreateInBatches(values []*entity.Game, batchSize int) error
	Save(values ...*entity.Game) error
	First() (*entity.Game, error)
	Take() (*entity.Game, error)
	Last() (*entity.Game, error)
	Find() ([]*entity.Game, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Game, err error)
	FindInBatches(result *[]*entity.Game, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.Game) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IGameDo
	Assign(attrs ...field.AssignExpr) IGameDo
	Joins(fields ...field.RelationField) IGameDo
	Preload(fields ...field.RelationField) IGameDo
	FirstOrInit() (*entity.Game, error)
	FirstOrCreate() (*entity.Game, error)
	FindByPage(offset int, limit int) (result []*entity.Game, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IGameDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (g gameDo) Debug() IGameDo {
	return g.withDO(g.DO.Debug())
}

func (g gameDo) WithContext(ctx context.Context) IGameDo {
	return g.withDO(g.DO.WithContext(ctx))
}

func (g gameDo) ReadDB() IGameDo {
	return g.Clauses(dbresolver.Read)
}

func (g gameDo) WriteDB() IGameDo {
	return g.Clauses(dbresolver.Write)
}

func (g gameDo) Session(config *gorm.Session) IGameDo {
	return g.withDO(g.DO.Session(config))
}

func (g gameDo) Clauses(conds ...clause.Expression) IGameDo {
	return g.withDO(g.DO.Clauses(conds...))
}

func (g gameDo) Returning(value interface{}, columns ...string) IGameDo {
	return g.withDO(g.DO.Returning(value, columns...))
}

func (g gameDo) Not(conds ...gen.Condition) IGameDo {
	return g.withDO(g.DO.Not(conds...))
}

func (g gameDo) Or(conds ...gen.Condition) IGameDo {
	return g.withDO(g.DO.Or(conds...))
}

func (g gameDo) Select(conds ...field.Expr) IGameDo {
	return g.withDO(g.DO.Select(conds...))
}

func (g gameDo) Where(conds ...gen.Condition) IGameDo {
	return g.withDO(g.DO.Where(conds...))
}

func (g gameDo) Order(conds ...field.Expr) IGameDo {
	return g.withDO(g.DO.Order(conds...))
}

func (g gameDo) Distinct(cols ...field.Expr) IGameDo {
	return g.withDO(g.DO.Distinct(cols...))
}

func (g gameDo) Omit(cols ...field.Expr) IGameDo {
	return g.withDO(g.DO.Omit(cols...))
}

func (g gameDo) Join(table schema.Tabler, on ...field.Expr) IGameDo {
	return g.withDO(g.DO.Join(table, on...))
}

func (g gameDo) LeftJoin(table schema.Tabler, on ...field.Expr) IGameDo {
	return g.withDO(g.DO.LeftJoin(table, on...))
}

func (g gameDo) RightJoin(table schema.Tabler, on ...field.Expr) IGameDo {
	return g.withDO(g.DO.RightJoin(table, on...))
}

func (g gameDo) Group(cols ...field.Expr) IGameDo {
	return g.withDO(g.DO.Group(cols...))
}

func (g gameDo) Having(conds ...gen.Condition) IGameDo {
	return g.withDO(g.DO.Having(conds...))
}

func (g gameDo) Limit(limit int) IGameDo {
	return g.withDO(g.DO.Limit(limit))
}

func (g gameDo) Offset(offset int) IGameDo {
	return g.withDO(g.DO.Offset(offset))
}

func (g gameDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IGameDo {
	return g.withDO(g.DO.Scopes(funcs...))
}

func (g gameDo) Unscoped() IGameDo {
	return g.withDO(g.DO.Unscoped())
}

func (g gameDo) Create(values ...*entity.Game) error {
	if len(values) == 0 {
		return nil
	}
	return g.DO.Create(values)
}

func (g gameDo) CreateInBatches(values []*entity.Game, batchSize int) error {
	return g.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (g gameDo) Save(values ...*entity.Game) error {
	if len(values) == 0 {
		return nil
	}
	return g.DO.Save(values)
}

func (g gameDo) First() (*entity.Game, error) {
	if result, err := g.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Game), nil
	}
}

func (g gameDo) Take() (*entity.Game, error) {
	if result, err := g.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Game), nil
	}
}

func (g gameDo) Last() (*entity.Game, error) {
	if result, err := g.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Game), nil
	}
}

func (g gameDo) Find() ([]*entity.Game, error) {
	result, err := g.DO.Find()
	return result.([]*entity.Game), err
}

func (g gameDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Game, err error) {
	buf := make([]*entity.Game, 0, batchSize)
	err = g.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (g gameDo) FindInBatches(result *[]*entity.Game, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return g.DO.FindInBatches(result, batchSize, fc)
}

func (g gameDo) Attrs(attrs ...field.AssignExpr) IGameDo {
	return g.withDO(g.DO.Attrs(attrs...))
}

func (g gameDo) Assign(attrs ...field.AssignExpr) IGameDo {
	return g.withDO(g.DO.Assign(attrs...))
}

func (g gameDo) Joins(fields ...field.RelationField) IGameDo {
	for _, _f := range fields {
		g = *g.withDO(g.DO.Joins(_f))
	}
	return &g
}

func (g gameDo) Preload(fields ...field.RelationField) IGameDo {
	for _, _f := range fields {
		g = *g.withDO(g.DO.Preload(_f))
	}
	return &g
}

func (g gameDo) FirstOrInit() (*entity.Game, error) {
	if result, err := g.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Game), nil
	}
}

func (g gameDo) FirstOrCreate() (*entity.Game, error) {
	if result, err := g.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Game), nil
	}
}

func (g gameDo) FindByPage(offset int, limit int) (result []*entity.Game, count int64, err error) {
	result, err = g.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = g.Offset(-1).Limit(-1).Count()
	return
}

func (g gameDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = g.Count()
	if err != nil {
		return
	}

	err = g.Offset(offset).Limit(limit).Scan(result)
	return
}

func (g gameDo) Scan(result interface{}) (err error) {
	return g.DO.Scan(result)
}

func (g gameDo) Delete(models ...*entity.Game) (result gen.ResultInfo, err error) {
	return g.DO.Delete(models)
}

func (g *gameDo) withDO(do gen.Dao) *gameDo {
	g.DO = *do.(*gen.DO)
	return g
}
