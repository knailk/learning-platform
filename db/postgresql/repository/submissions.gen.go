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

func newSubmission(db *gorm.DB, opts ...gen.DOOption) submission {
	_submission := submission{}

	_submission.submissionDo.UseDB(db, opts...)
	_submission.submissionDo.UseModel(&entity.Submission{})

	tableName := _submission.submissionDo.TableName()
	_submission.ALL = field.NewAsterisk(tableName)
	_submission.ID = field.NewField(tableName, "id")
	_submission.UserID = field.NewField(tableName, "user_id")
	_submission.ProblemID = field.NewField(tableName, "problem_id")
	_submission.SolutionID = field.NewField(tableName, "solution_id")
	_submission.Status = field.NewString(tableName, "status")
	_submission.Time = field.NewFloat64(tableName, "time")
	_submission.Memory = field.NewFloat64(tableName, "memory")
	_submission.UpdatedAt = field.NewTime(tableName, "updated_at")
	_submission.CreatedAt = field.NewTime(tableName, "created_at")

	_submission.fillFieldMap()

	return _submission
}

type submission struct {
	submissionDo submissionDo

	ALL        field.Asterisk
	ID         field.Field
	UserID     field.Field
	ProblemID  field.Field
	SolutionID field.Field
	Status     field.String
	Time       field.Float64
	Memory     field.Float64
	UpdatedAt  field.Time
	CreatedAt  field.Time

	fieldMap map[string]field.Expr
}

func (s submission) Table(newTableName string) *submission {
	s.submissionDo.UseTable(newTableName)
	return s.updateTableName(newTableName)
}

func (s submission) As(alias string) *submission {
	s.submissionDo.DO = *(s.submissionDo.As(alias).(*gen.DO))
	return s.updateTableName(alias)
}

func (s *submission) updateTableName(table string) *submission {
	s.ALL = field.NewAsterisk(table)
	s.ID = field.NewField(table, "id")
	s.UserID = field.NewField(table, "user_id")
	s.ProblemID = field.NewField(table, "problem_id")
	s.SolutionID = field.NewField(table, "solution_id")
	s.Status = field.NewString(table, "status")
	s.Time = field.NewFloat64(table, "time")
	s.Memory = field.NewFloat64(table, "memory")
	s.UpdatedAt = field.NewTime(table, "updated_at")
	s.CreatedAt = field.NewTime(table, "created_at")

	s.fillFieldMap()

	return s
}

func (s *submission) WithContext(ctx context.Context) ISubmissionDo {
	return s.submissionDo.WithContext(ctx)
}

func (s submission) TableName() string { return s.submissionDo.TableName() }

func (s submission) Alias() string { return s.submissionDo.Alias() }

func (s submission) Columns(cols ...field.Expr) gen.Columns { return s.submissionDo.Columns(cols...) }

func (s *submission) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := s.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (s *submission) fillFieldMap() {
	s.fieldMap = make(map[string]field.Expr, 9)
	s.fieldMap["id"] = s.ID
	s.fieldMap["user_id"] = s.UserID
	s.fieldMap["problem_id"] = s.ProblemID
	s.fieldMap["solution_id"] = s.SolutionID
	s.fieldMap["status"] = s.Status
	s.fieldMap["time"] = s.Time
	s.fieldMap["memory"] = s.Memory
	s.fieldMap["updated_at"] = s.UpdatedAt
	s.fieldMap["created_at"] = s.CreatedAt
}

func (s submission) clone(db *gorm.DB) submission {
	s.submissionDo.ReplaceConnPool(db.Statement.ConnPool)
	return s
}

func (s submission) replaceDB(db *gorm.DB) submission {
	s.submissionDo.ReplaceDB(db)
	return s
}

type submissionDo struct{ gen.DO }

type ISubmissionDo interface {
	gen.SubQuery
	Debug() ISubmissionDo
	WithContext(ctx context.Context) ISubmissionDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ISubmissionDo
	WriteDB() ISubmissionDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ISubmissionDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ISubmissionDo
	Not(conds ...gen.Condition) ISubmissionDo
	Or(conds ...gen.Condition) ISubmissionDo
	Select(conds ...field.Expr) ISubmissionDo
	Where(conds ...gen.Condition) ISubmissionDo
	Order(conds ...field.Expr) ISubmissionDo
	Distinct(cols ...field.Expr) ISubmissionDo
	Omit(cols ...field.Expr) ISubmissionDo
	Join(table schema.Tabler, on ...field.Expr) ISubmissionDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ISubmissionDo
	RightJoin(table schema.Tabler, on ...field.Expr) ISubmissionDo
	Group(cols ...field.Expr) ISubmissionDo
	Having(conds ...gen.Condition) ISubmissionDo
	Limit(limit int) ISubmissionDo
	Offset(offset int) ISubmissionDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ISubmissionDo
	Unscoped() ISubmissionDo
	Create(values ...*entity.Submission) error
	CreateInBatches(values []*entity.Submission, batchSize int) error
	Save(values ...*entity.Submission) error
	First() (*entity.Submission, error)
	Take() (*entity.Submission, error)
	Last() (*entity.Submission, error)
	Find() ([]*entity.Submission, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Submission, err error)
	FindInBatches(result *[]*entity.Submission, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.Submission) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ISubmissionDo
	Assign(attrs ...field.AssignExpr) ISubmissionDo
	Joins(fields ...field.RelationField) ISubmissionDo
	Preload(fields ...field.RelationField) ISubmissionDo
	FirstOrInit() (*entity.Submission, error)
	FirstOrCreate() (*entity.Submission, error)
	FindByPage(offset int, limit int) (result []*entity.Submission, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ISubmissionDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (s submissionDo) Debug() ISubmissionDo {
	return s.withDO(s.DO.Debug())
}

func (s submissionDo) WithContext(ctx context.Context) ISubmissionDo {
	return s.withDO(s.DO.WithContext(ctx))
}

func (s submissionDo) ReadDB() ISubmissionDo {
	return s.Clauses(dbresolver.Read)
}

func (s submissionDo) WriteDB() ISubmissionDo {
	return s.Clauses(dbresolver.Write)
}

func (s submissionDo) Session(config *gorm.Session) ISubmissionDo {
	return s.withDO(s.DO.Session(config))
}

func (s submissionDo) Clauses(conds ...clause.Expression) ISubmissionDo {
	return s.withDO(s.DO.Clauses(conds...))
}

func (s submissionDo) Returning(value interface{}, columns ...string) ISubmissionDo {
	return s.withDO(s.DO.Returning(value, columns...))
}

func (s submissionDo) Not(conds ...gen.Condition) ISubmissionDo {
	return s.withDO(s.DO.Not(conds...))
}

func (s submissionDo) Or(conds ...gen.Condition) ISubmissionDo {
	return s.withDO(s.DO.Or(conds...))
}

func (s submissionDo) Select(conds ...field.Expr) ISubmissionDo {
	return s.withDO(s.DO.Select(conds...))
}

func (s submissionDo) Where(conds ...gen.Condition) ISubmissionDo {
	return s.withDO(s.DO.Where(conds...))
}

func (s submissionDo) Order(conds ...field.Expr) ISubmissionDo {
	return s.withDO(s.DO.Order(conds...))
}

func (s submissionDo) Distinct(cols ...field.Expr) ISubmissionDo {
	return s.withDO(s.DO.Distinct(cols...))
}

func (s submissionDo) Omit(cols ...field.Expr) ISubmissionDo {
	return s.withDO(s.DO.Omit(cols...))
}

func (s submissionDo) Join(table schema.Tabler, on ...field.Expr) ISubmissionDo {
	return s.withDO(s.DO.Join(table, on...))
}

func (s submissionDo) LeftJoin(table schema.Tabler, on ...field.Expr) ISubmissionDo {
	return s.withDO(s.DO.LeftJoin(table, on...))
}

func (s submissionDo) RightJoin(table schema.Tabler, on ...field.Expr) ISubmissionDo {
	return s.withDO(s.DO.RightJoin(table, on...))
}

func (s submissionDo) Group(cols ...field.Expr) ISubmissionDo {
	return s.withDO(s.DO.Group(cols...))
}

func (s submissionDo) Having(conds ...gen.Condition) ISubmissionDo {
	return s.withDO(s.DO.Having(conds...))
}

func (s submissionDo) Limit(limit int) ISubmissionDo {
	return s.withDO(s.DO.Limit(limit))
}

func (s submissionDo) Offset(offset int) ISubmissionDo {
	return s.withDO(s.DO.Offset(offset))
}

func (s submissionDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ISubmissionDo {
	return s.withDO(s.DO.Scopes(funcs...))
}

func (s submissionDo) Unscoped() ISubmissionDo {
	return s.withDO(s.DO.Unscoped())
}

func (s submissionDo) Create(values ...*entity.Submission) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Create(values)
}

func (s submissionDo) CreateInBatches(values []*entity.Submission, batchSize int) error {
	return s.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (s submissionDo) Save(values ...*entity.Submission) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Save(values)
}

func (s submissionDo) First() (*entity.Submission, error) {
	if result, err := s.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Submission), nil
	}
}

func (s submissionDo) Take() (*entity.Submission, error) {
	if result, err := s.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Submission), nil
	}
}

func (s submissionDo) Last() (*entity.Submission, error) {
	if result, err := s.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Submission), nil
	}
}

func (s submissionDo) Find() ([]*entity.Submission, error) {
	result, err := s.DO.Find()
	return result.([]*entity.Submission), err
}

func (s submissionDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Submission, err error) {
	buf := make([]*entity.Submission, 0, batchSize)
	err = s.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (s submissionDo) FindInBatches(result *[]*entity.Submission, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return s.DO.FindInBatches(result, batchSize, fc)
}

func (s submissionDo) Attrs(attrs ...field.AssignExpr) ISubmissionDo {
	return s.withDO(s.DO.Attrs(attrs...))
}

func (s submissionDo) Assign(attrs ...field.AssignExpr) ISubmissionDo {
	return s.withDO(s.DO.Assign(attrs...))
}

func (s submissionDo) Joins(fields ...field.RelationField) ISubmissionDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Joins(_f))
	}
	return &s
}

func (s submissionDo) Preload(fields ...field.RelationField) ISubmissionDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Preload(_f))
	}
	return &s
}

func (s submissionDo) FirstOrInit() (*entity.Submission, error) {
	if result, err := s.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Submission), nil
	}
}

func (s submissionDo) FirstOrCreate() (*entity.Submission, error) {
	if result, err := s.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Submission), nil
	}
}

func (s submissionDo) FindByPage(offset int, limit int) (result []*entity.Submission, count int64, err error) {
	result, err = s.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = s.Offset(-1).Limit(-1).Count()
	return
}

func (s submissionDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = s.Count()
	if err != nil {
		return
	}

	err = s.Offset(offset).Limit(limit).Scan(result)
	return
}

func (s submissionDo) Scan(result interface{}) (err error) {
	return s.DO.Scan(result)
}

func (s submissionDo) Delete(models ...*entity.Submission) (result gen.ResultInfo, err error) {
	return s.DO.Delete(models)
}

func (s *submissionDo) withDO(do gen.Dao) *submissionDo {
	s.DO = *do.(*gen.DO)
	return s
}