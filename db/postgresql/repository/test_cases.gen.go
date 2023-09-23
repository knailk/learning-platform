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

func newTestCase(db *gorm.DB, opts ...gen.DOOption) testCase {
	_testCase := testCase{}

	_testCase.testCaseDo.UseDB(db, opts...)
	_testCase.testCaseDo.UseModel(&entity.TestCase{})

	tableName := _testCase.testCaseDo.TableName()
	_testCase.ALL = field.NewAsterisk(tableName)
	_testCase.ID = field.NewField(tableName, "id")
	_testCase.ProblemID = field.NewField(tableName, "problem_id")
	_testCase.Input = field.NewField(tableName, "input")
	_testCase.UpdatedAt = field.NewTime(tableName, "updated_at")
	_testCase.CreatedAt = field.NewTime(tableName, "created_at")

	_testCase.fillFieldMap()

	return _testCase
}

type testCase struct {
	testCaseDo testCaseDo

	ALL       field.Asterisk
	ID        field.Field
	ProblemID field.Field
	Input     field.Field
	UpdatedAt field.Time
	CreatedAt field.Time

	fieldMap map[string]field.Expr
}

func (t testCase) Table(newTableName string) *testCase {
	t.testCaseDo.UseTable(newTableName)
	return t.updateTableName(newTableName)
}

func (t testCase) As(alias string) *testCase {
	t.testCaseDo.DO = *(t.testCaseDo.As(alias).(*gen.DO))
	return t.updateTableName(alias)
}

func (t *testCase) updateTableName(table string) *testCase {
	t.ALL = field.NewAsterisk(table)
	t.ID = field.NewField(table, "id")
	t.ProblemID = field.NewField(table, "problem_id")
	t.Input = field.NewField(table, "input")
	t.UpdatedAt = field.NewTime(table, "updated_at")
	t.CreatedAt = field.NewTime(table, "created_at")

	t.fillFieldMap()

	return t
}

func (t *testCase) WithContext(ctx context.Context) ITestCaseDo { return t.testCaseDo.WithContext(ctx) }

func (t testCase) TableName() string { return t.testCaseDo.TableName() }

func (t testCase) Alias() string { return t.testCaseDo.Alias() }

func (t testCase) Columns(cols ...field.Expr) gen.Columns { return t.testCaseDo.Columns(cols...) }

func (t *testCase) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := t.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (t *testCase) fillFieldMap() {
	t.fieldMap = make(map[string]field.Expr, 5)
	t.fieldMap["id"] = t.ID
	t.fieldMap["problem_id"] = t.ProblemID
	t.fieldMap["input"] = t.Input
	t.fieldMap["updated_at"] = t.UpdatedAt
	t.fieldMap["created_at"] = t.CreatedAt
}

func (t testCase) clone(db *gorm.DB) testCase {
	t.testCaseDo.ReplaceConnPool(db.Statement.ConnPool)
	return t
}

func (t testCase) replaceDB(db *gorm.DB) testCase {
	t.testCaseDo.ReplaceDB(db)
	return t
}

type testCaseDo struct{ gen.DO }

type ITestCaseDo interface {
	gen.SubQuery
	Debug() ITestCaseDo
	WithContext(ctx context.Context) ITestCaseDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ITestCaseDo
	WriteDB() ITestCaseDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ITestCaseDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ITestCaseDo
	Not(conds ...gen.Condition) ITestCaseDo
	Or(conds ...gen.Condition) ITestCaseDo
	Select(conds ...field.Expr) ITestCaseDo
	Where(conds ...gen.Condition) ITestCaseDo
	Order(conds ...field.Expr) ITestCaseDo
	Distinct(cols ...field.Expr) ITestCaseDo
	Omit(cols ...field.Expr) ITestCaseDo
	Join(table schema.Tabler, on ...field.Expr) ITestCaseDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ITestCaseDo
	RightJoin(table schema.Tabler, on ...field.Expr) ITestCaseDo
	Group(cols ...field.Expr) ITestCaseDo
	Having(conds ...gen.Condition) ITestCaseDo
	Limit(limit int) ITestCaseDo
	Offset(offset int) ITestCaseDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ITestCaseDo
	Unscoped() ITestCaseDo
	Create(values ...*entity.TestCase) error
	CreateInBatches(values []*entity.TestCase, batchSize int) error
	Save(values ...*entity.TestCase) error
	First() (*entity.TestCase, error)
	Take() (*entity.TestCase, error)
	Last() (*entity.TestCase, error)
	Find() ([]*entity.TestCase, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.TestCase, err error)
	FindInBatches(result *[]*entity.TestCase, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.TestCase) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ITestCaseDo
	Assign(attrs ...field.AssignExpr) ITestCaseDo
	Joins(fields ...field.RelationField) ITestCaseDo
	Preload(fields ...field.RelationField) ITestCaseDo
	FirstOrInit() (*entity.TestCase, error)
	FirstOrCreate() (*entity.TestCase, error)
	FindByPage(offset int, limit int) (result []*entity.TestCase, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ITestCaseDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (t testCaseDo) Debug() ITestCaseDo {
	return t.withDO(t.DO.Debug())
}

func (t testCaseDo) WithContext(ctx context.Context) ITestCaseDo {
	return t.withDO(t.DO.WithContext(ctx))
}

func (t testCaseDo) ReadDB() ITestCaseDo {
	return t.Clauses(dbresolver.Read)
}

func (t testCaseDo) WriteDB() ITestCaseDo {
	return t.Clauses(dbresolver.Write)
}

func (t testCaseDo) Session(config *gorm.Session) ITestCaseDo {
	return t.withDO(t.DO.Session(config))
}

func (t testCaseDo) Clauses(conds ...clause.Expression) ITestCaseDo {
	return t.withDO(t.DO.Clauses(conds...))
}

func (t testCaseDo) Returning(value interface{}, columns ...string) ITestCaseDo {
	return t.withDO(t.DO.Returning(value, columns...))
}

func (t testCaseDo) Not(conds ...gen.Condition) ITestCaseDo {
	return t.withDO(t.DO.Not(conds...))
}

func (t testCaseDo) Or(conds ...gen.Condition) ITestCaseDo {
	return t.withDO(t.DO.Or(conds...))
}

func (t testCaseDo) Select(conds ...field.Expr) ITestCaseDo {
	return t.withDO(t.DO.Select(conds...))
}

func (t testCaseDo) Where(conds ...gen.Condition) ITestCaseDo {
	return t.withDO(t.DO.Where(conds...))
}

func (t testCaseDo) Order(conds ...field.Expr) ITestCaseDo {
	return t.withDO(t.DO.Order(conds...))
}

func (t testCaseDo) Distinct(cols ...field.Expr) ITestCaseDo {
	return t.withDO(t.DO.Distinct(cols...))
}

func (t testCaseDo) Omit(cols ...field.Expr) ITestCaseDo {
	return t.withDO(t.DO.Omit(cols...))
}

func (t testCaseDo) Join(table schema.Tabler, on ...field.Expr) ITestCaseDo {
	return t.withDO(t.DO.Join(table, on...))
}

func (t testCaseDo) LeftJoin(table schema.Tabler, on ...field.Expr) ITestCaseDo {
	return t.withDO(t.DO.LeftJoin(table, on...))
}

func (t testCaseDo) RightJoin(table schema.Tabler, on ...field.Expr) ITestCaseDo {
	return t.withDO(t.DO.RightJoin(table, on...))
}

func (t testCaseDo) Group(cols ...field.Expr) ITestCaseDo {
	return t.withDO(t.DO.Group(cols...))
}

func (t testCaseDo) Having(conds ...gen.Condition) ITestCaseDo {
	return t.withDO(t.DO.Having(conds...))
}

func (t testCaseDo) Limit(limit int) ITestCaseDo {
	return t.withDO(t.DO.Limit(limit))
}

func (t testCaseDo) Offset(offset int) ITestCaseDo {
	return t.withDO(t.DO.Offset(offset))
}

func (t testCaseDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ITestCaseDo {
	return t.withDO(t.DO.Scopes(funcs...))
}

func (t testCaseDo) Unscoped() ITestCaseDo {
	return t.withDO(t.DO.Unscoped())
}

func (t testCaseDo) Create(values ...*entity.TestCase) error {
	if len(values) == 0 {
		return nil
	}
	return t.DO.Create(values)
}

func (t testCaseDo) CreateInBatches(values []*entity.TestCase, batchSize int) error {
	return t.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (t testCaseDo) Save(values ...*entity.TestCase) error {
	if len(values) == 0 {
		return nil
	}
	return t.DO.Save(values)
}

func (t testCaseDo) First() (*entity.TestCase, error) {
	if result, err := t.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.TestCase), nil
	}
}

func (t testCaseDo) Take() (*entity.TestCase, error) {
	if result, err := t.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.TestCase), nil
	}
}

func (t testCaseDo) Last() (*entity.TestCase, error) {
	if result, err := t.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.TestCase), nil
	}
}

func (t testCaseDo) Find() ([]*entity.TestCase, error) {
	result, err := t.DO.Find()
	return result.([]*entity.TestCase), err
}

func (t testCaseDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.TestCase, err error) {
	buf := make([]*entity.TestCase, 0, batchSize)
	err = t.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (t testCaseDo) FindInBatches(result *[]*entity.TestCase, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return t.DO.FindInBatches(result, batchSize, fc)
}

func (t testCaseDo) Attrs(attrs ...field.AssignExpr) ITestCaseDo {
	return t.withDO(t.DO.Attrs(attrs...))
}

func (t testCaseDo) Assign(attrs ...field.AssignExpr) ITestCaseDo {
	return t.withDO(t.DO.Assign(attrs...))
}

func (t testCaseDo) Joins(fields ...field.RelationField) ITestCaseDo {
	for _, _f := range fields {
		t = *t.withDO(t.DO.Joins(_f))
	}
	return &t
}

func (t testCaseDo) Preload(fields ...field.RelationField) ITestCaseDo {
	for _, _f := range fields {
		t = *t.withDO(t.DO.Preload(_f))
	}
	return &t
}

func (t testCaseDo) FirstOrInit() (*entity.TestCase, error) {
	if result, err := t.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.TestCase), nil
	}
}

func (t testCaseDo) FirstOrCreate() (*entity.TestCase, error) {
	if result, err := t.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.TestCase), nil
	}
}

func (t testCaseDo) FindByPage(offset int, limit int) (result []*entity.TestCase, count int64, err error) {
	result, err = t.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = t.Offset(-1).Limit(-1).Count()
	return
}

func (t testCaseDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = t.Count()
	if err != nil {
		return
	}

	err = t.Offset(offset).Limit(limit).Scan(result)
	return
}

func (t testCaseDo) Scan(result interface{}) (err error) {
	return t.DO.Scan(result)
}

func (t testCaseDo) Delete(models ...*entity.TestCase) (result gen.ResultInfo, err error) {
	return t.DO.Delete(models)
}

func (t *testCaseDo) withDO(do gen.Dao) *testCaseDo {
	t.DO = *do.(*gen.DO)
	return t
}
