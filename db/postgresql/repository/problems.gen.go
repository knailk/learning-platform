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

func newProblem(db *gorm.DB, opts ...gen.DOOption) problem {
	_problem := problem{}

	_problem.problemDo.UseDB(db, opts...)
	_problem.problemDo.UseModel(&entity.Problem{})

	tableName := _problem.problemDo.TableName()
	_problem.ALL = field.NewAsterisk(tableName)
	_problem.ID = field.NewField(tableName, "id")
	_problem.Title = field.NewString(tableName, "title")
	_problem.Description = field.NewString(tableName, "description")
	_problem.Level = field.NewString(tableName, "level")
	_problem.URL = field.NewString(tableName, "url")
	_problem.FunctionName = field.NewString(tableName, "function_name")
	_problem.Args = field.NewField(tableName, "args")
	_problem.AvailableCode = field.NewString(tableName, "available_code")
	_problem.SolutionCode = field.NewString(tableName, "solution_code")
	_problem.UpdatedAt = field.NewTime(tableName, "updated_at")
	_problem.CreatedAt = field.NewTime(tableName, "created_at")
	_problem.TestCases = problemHasManyTestCases{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("TestCases", "entity.TestCase"),
	}

	_problem.fillFieldMap()

	return _problem
}

type problem struct {
	problemDo problemDo

	ALL           field.Asterisk
	ID            field.Field
	Title         field.String
	Description   field.String
	Level         field.String
	URL           field.String
	FunctionName  field.String
	Args          field.Field
	AvailableCode field.String
	SolutionCode  field.String
	UpdatedAt     field.Time
	CreatedAt     field.Time
	TestCases     problemHasManyTestCases

	fieldMap map[string]field.Expr
}

func (p problem) Table(newTableName string) *problem {
	p.problemDo.UseTable(newTableName)
	return p.updateTableName(newTableName)
}

func (p problem) As(alias string) *problem {
	p.problemDo.DO = *(p.problemDo.As(alias).(*gen.DO))
	return p.updateTableName(alias)
}

func (p *problem) updateTableName(table string) *problem {
	p.ALL = field.NewAsterisk(table)
	p.ID = field.NewField(table, "id")
	p.Title = field.NewString(table, "title")
	p.Description = field.NewString(table, "description")
	p.Level = field.NewString(table, "level")
	p.URL = field.NewString(table, "url")
	p.FunctionName = field.NewString(table, "function_name")
	p.Args = field.NewField(table, "args")
	p.AvailableCode = field.NewString(table, "available_code")
	p.SolutionCode = field.NewString(table, "solution_code")
	p.UpdatedAt = field.NewTime(table, "updated_at")
	p.CreatedAt = field.NewTime(table, "created_at")

	p.fillFieldMap()

	return p
}

func (p *problem) WithContext(ctx context.Context) IProblemDo { return p.problemDo.WithContext(ctx) }

func (p problem) TableName() string { return p.problemDo.TableName() }

func (p problem) Alias() string { return p.problemDo.Alias() }

func (p problem) Columns(cols ...field.Expr) gen.Columns { return p.problemDo.Columns(cols...) }

func (p *problem) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := p.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (p *problem) fillFieldMap() {
	p.fieldMap = make(map[string]field.Expr, 12)
	p.fieldMap["id"] = p.ID
	p.fieldMap["title"] = p.Title
	p.fieldMap["description"] = p.Description
	p.fieldMap["level"] = p.Level
	p.fieldMap["url"] = p.URL
	p.fieldMap["function_name"] = p.FunctionName
	p.fieldMap["args"] = p.Args
	p.fieldMap["available_code"] = p.AvailableCode
	p.fieldMap["solution_code"] = p.SolutionCode
	p.fieldMap["updated_at"] = p.UpdatedAt
	p.fieldMap["created_at"] = p.CreatedAt

}

func (p problem) clone(db *gorm.DB) problem {
	p.problemDo.ReplaceConnPool(db.Statement.ConnPool)
	return p
}

func (p problem) replaceDB(db *gorm.DB) problem {
	p.problemDo.ReplaceDB(db)
	return p
}

type problemHasManyTestCases struct {
	db *gorm.DB

	field.RelationField
}

func (a problemHasManyTestCases) Where(conds ...field.Expr) *problemHasManyTestCases {
	if len(conds) == 0 {
		return &a
	}

	exprs := make([]clause.Expression, 0, len(conds))
	for _, cond := range conds {
		exprs = append(exprs, cond.BeCond().(clause.Expression))
	}
	a.db = a.db.Clauses(clause.Where{Exprs: exprs})
	return &a
}

func (a problemHasManyTestCases) WithContext(ctx context.Context) *problemHasManyTestCases {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a problemHasManyTestCases) Session(session *gorm.Session) *problemHasManyTestCases {
	a.db = a.db.Session(session)
	return &a
}

func (a problemHasManyTestCases) Model(m *entity.Problem) *problemHasManyTestCasesTx {
	return &problemHasManyTestCasesTx{a.db.Model(m).Association(a.Name())}
}

type problemHasManyTestCasesTx struct{ tx *gorm.Association }

func (a problemHasManyTestCasesTx) Find() (result []*entity.TestCase, err error) {
	return result, a.tx.Find(&result)
}

func (a problemHasManyTestCasesTx) Append(values ...*entity.TestCase) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a problemHasManyTestCasesTx) Replace(values ...*entity.TestCase) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a problemHasManyTestCasesTx) Delete(values ...*entity.TestCase) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a problemHasManyTestCasesTx) Clear() error {
	return a.tx.Clear()
}

func (a problemHasManyTestCasesTx) Count() int64 {
	return a.tx.Count()
}

type problemDo struct{ gen.DO }

type IProblemDo interface {
	gen.SubQuery
	Debug() IProblemDo
	WithContext(ctx context.Context) IProblemDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IProblemDo
	WriteDB() IProblemDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IProblemDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IProblemDo
	Not(conds ...gen.Condition) IProblemDo
	Or(conds ...gen.Condition) IProblemDo
	Select(conds ...field.Expr) IProblemDo
	Where(conds ...gen.Condition) IProblemDo
	Order(conds ...field.Expr) IProblemDo
	Distinct(cols ...field.Expr) IProblemDo
	Omit(cols ...field.Expr) IProblemDo
	Join(table schema.Tabler, on ...field.Expr) IProblemDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IProblemDo
	RightJoin(table schema.Tabler, on ...field.Expr) IProblemDo
	Group(cols ...field.Expr) IProblemDo
	Having(conds ...gen.Condition) IProblemDo
	Limit(limit int) IProblemDo
	Offset(offset int) IProblemDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IProblemDo
	Unscoped() IProblemDo
	Create(values ...*entity.Problem) error
	CreateInBatches(values []*entity.Problem, batchSize int) error
	Save(values ...*entity.Problem) error
	First() (*entity.Problem, error)
	Take() (*entity.Problem, error)
	Last() (*entity.Problem, error)
	Find() ([]*entity.Problem, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Problem, err error)
	FindInBatches(result *[]*entity.Problem, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.Problem) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IProblemDo
	Assign(attrs ...field.AssignExpr) IProblemDo
	Joins(fields ...field.RelationField) IProblemDo
	Preload(fields ...field.RelationField) IProblemDo
	FirstOrInit() (*entity.Problem, error)
	FirstOrCreate() (*entity.Problem, error)
	FindByPage(offset int, limit int) (result []*entity.Problem, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IProblemDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (p problemDo) Debug() IProblemDo {
	return p.withDO(p.DO.Debug())
}

func (p problemDo) WithContext(ctx context.Context) IProblemDo {
	return p.withDO(p.DO.WithContext(ctx))
}

func (p problemDo) ReadDB() IProblemDo {
	return p.Clauses(dbresolver.Read)
}

func (p problemDo) WriteDB() IProblemDo {
	return p.Clauses(dbresolver.Write)
}

func (p problemDo) Session(config *gorm.Session) IProblemDo {
	return p.withDO(p.DO.Session(config))
}

func (p problemDo) Clauses(conds ...clause.Expression) IProblemDo {
	return p.withDO(p.DO.Clauses(conds...))
}

func (p problemDo) Returning(value interface{}, columns ...string) IProblemDo {
	return p.withDO(p.DO.Returning(value, columns...))
}

func (p problemDo) Not(conds ...gen.Condition) IProblemDo {
	return p.withDO(p.DO.Not(conds...))
}

func (p problemDo) Or(conds ...gen.Condition) IProblemDo {
	return p.withDO(p.DO.Or(conds...))
}

func (p problemDo) Select(conds ...field.Expr) IProblemDo {
	return p.withDO(p.DO.Select(conds...))
}

func (p problemDo) Where(conds ...gen.Condition) IProblemDo {
	return p.withDO(p.DO.Where(conds...))
}

func (p problemDo) Order(conds ...field.Expr) IProblemDo {
	return p.withDO(p.DO.Order(conds...))
}

func (p problemDo) Distinct(cols ...field.Expr) IProblemDo {
	return p.withDO(p.DO.Distinct(cols...))
}

func (p problemDo) Omit(cols ...field.Expr) IProblemDo {
	return p.withDO(p.DO.Omit(cols...))
}

func (p problemDo) Join(table schema.Tabler, on ...field.Expr) IProblemDo {
	return p.withDO(p.DO.Join(table, on...))
}

func (p problemDo) LeftJoin(table schema.Tabler, on ...field.Expr) IProblemDo {
	return p.withDO(p.DO.LeftJoin(table, on...))
}

func (p problemDo) RightJoin(table schema.Tabler, on ...field.Expr) IProblemDo {
	return p.withDO(p.DO.RightJoin(table, on...))
}

func (p problemDo) Group(cols ...field.Expr) IProblemDo {
	return p.withDO(p.DO.Group(cols...))
}

func (p problemDo) Having(conds ...gen.Condition) IProblemDo {
	return p.withDO(p.DO.Having(conds...))
}

func (p problemDo) Limit(limit int) IProblemDo {
	return p.withDO(p.DO.Limit(limit))
}

func (p problemDo) Offset(offset int) IProblemDo {
	return p.withDO(p.DO.Offset(offset))
}

func (p problemDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IProblemDo {
	return p.withDO(p.DO.Scopes(funcs...))
}

func (p problemDo) Unscoped() IProblemDo {
	return p.withDO(p.DO.Unscoped())
}

func (p problemDo) Create(values ...*entity.Problem) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Create(values)
}

func (p problemDo) CreateInBatches(values []*entity.Problem, batchSize int) error {
	return p.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (p problemDo) Save(values ...*entity.Problem) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Save(values)
}

func (p problemDo) First() (*entity.Problem, error) {
	if result, err := p.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Problem), nil
	}
}

func (p problemDo) Take() (*entity.Problem, error) {
	if result, err := p.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Problem), nil
	}
}

func (p problemDo) Last() (*entity.Problem, error) {
	if result, err := p.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Problem), nil
	}
}

func (p problemDo) Find() ([]*entity.Problem, error) {
	result, err := p.DO.Find()
	return result.([]*entity.Problem), err
}

func (p problemDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Problem, err error) {
	buf := make([]*entity.Problem, 0, batchSize)
	err = p.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (p problemDo) FindInBatches(result *[]*entity.Problem, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return p.DO.FindInBatches(result, batchSize, fc)
}

func (p problemDo) Attrs(attrs ...field.AssignExpr) IProblemDo {
	return p.withDO(p.DO.Attrs(attrs...))
}

func (p problemDo) Assign(attrs ...field.AssignExpr) IProblemDo {
	return p.withDO(p.DO.Assign(attrs...))
}

func (p problemDo) Joins(fields ...field.RelationField) IProblemDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Joins(_f))
	}
	return &p
}

func (p problemDo) Preload(fields ...field.RelationField) IProblemDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Preload(_f))
	}
	return &p
}

func (p problemDo) FirstOrInit() (*entity.Problem, error) {
	if result, err := p.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Problem), nil
	}
}

func (p problemDo) FirstOrCreate() (*entity.Problem, error) {
	if result, err := p.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Problem), nil
	}
}

func (p problemDo) FindByPage(offset int, limit int) (result []*entity.Problem, count int64, err error) {
	result, err = p.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = p.Offset(-1).Limit(-1).Count()
	return
}

func (p problemDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = p.Count()
	if err != nil {
		return
	}

	err = p.Offset(offset).Limit(limit).Scan(result)
	return
}

func (p problemDo) Scan(result interface{}) (err error) {
	return p.DO.Scan(result)
}

func (p problemDo) Delete(models ...*entity.Problem) (result gen.ResultInfo, err error) {
	return p.DO.Delete(models)
}

func (p *problemDo) withDO(do gen.Dao) *problemDo {
	p.DO = *do.(*gen.DO)
	return p
}
