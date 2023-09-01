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

func newQuestionAnswer(db *gorm.DB, opts ...gen.DOOption) questionAnswer {
	_questionAnswer := questionAnswer{}

	_questionAnswer.questionAnswerDo.UseDB(db, opts...)
	_questionAnswer.questionAnswerDo.UseModel(&entity.QuestionAnswer{})

	tableName := _questionAnswer.questionAnswerDo.TableName()
	_questionAnswer.ALL = field.NewAsterisk(tableName)
	_questionAnswer.ID = field.NewField(tableName, "id")
	_questionAnswer.LessonAnswerID = field.NewField(tableName, "lesson_answer_id")
	_questionAnswer.QuestionID = field.NewField(tableName, "question_id")
	_questionAnswer.Answer = field.NewString(tableName, "answer")
	_questionAnswer.Score = field.NewInt(tableName, "score")
	_questionAnswer.UpdatedAt = field.NewTime(tableName, "updated_at")
	_questionAnswer.CreatedAt = field.NewTime(tableName, "created_at")

	_questionAnswer.fillFieldMap()

	return _questionAnswer
}

type questionAnswer struct {
	questionAnswerDo questionAnswerDo

	ALL            field.Asterisk
	ID             field.Field
	LessonAnswerID field.Field
	QuestionID     field.Field
	Answer         field.String
	Score          field.Int
	UpdatedAt      field.Time
	CreatedAt      field.Time

	fieldMap map[string]field.Expr
}

func (q questionAnswer) Table(newTableName string) *questionAnswer {
	q.questionAnswerDo.UseTable(newTableName)
	return q.updateTableName(newTableName)
}

func (q questionAnswer) As(alias string) *questionAnswer {
	q.questionAnswerDo.DO = *(q.questionAnswerDo.As(alias).(*gen.DO))
	return q.updateTableName(alias)
}

func (q *questionAnswer) updateTableName(table string) *questionAnswer {
	q.ALL = field.NewAsterisk(table)
	q.ID = field.NewField(table, "id")
	q.LessonAnswerID = field.NewField(table, "lesson_answer_id")
	q.QuestionID = field.NewField(table, "question_id")
	q.Answer = field.NewString(table, "answer")
	q.Score = field.NewInt(table, "score")
	q.UpdatedAt = field.NewTime(table, "updated_at")
	q.CreatedAt = field.NewTime(table, "created_at")

	q.fillFieldMap()

	return q
}

func (q *questionAnswer) WithContext(ctx context.Context) IQuestionAnswerDo {
	return q.questionAnswerDo.WithContext(ctx)
}

func (q questionAnswer) TableName() string { return q.questionAnswerDo.TableName() }

func (q questionAnswer) Alias() string { return q.questionAnswerDo.Alias() }

func (q questionAnswer) Columns(cols ...field.Expr) gen.Columns {
	return q.questionAnswerDo.Columns(cols...)
}

func (q *questionAnswer) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := q.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (q *questionAnswer) fillFieldMap() {
	q.fieldMap = make(map[string]field.Expr, 7)
	q.fieldMap["id"] = q.ID
	q.fieldMap["lesson_answer_id"] = q.LessonAnswerID
	q.fieldMap["question_id"] = q.QuestionID
	q.fieldMap["answer"] = q.Answer
	q.fieldMap["score"] = q.Score
	q.fieldMap["updated_at"] = q.UpdatedAt
	q.fieldMap["created_at"] = q.CreatedAt
}

func (q questionAnswer) clone(db *gorm.DB) questionAnswer {
	q.questionAnswerDo.ReplaceConnPool(db.Statement.ConnPool)
	return q
}

func (q questionAnswer) replaceDB(db *gorm.DB) questionAnswer {
	q.questionAnswerDo.ReplaceDB(db)
	return q
}

type questionAnswerDo struct{ gen.DO }

type IQuestionAnswerDo interface {
	gen.SubQuery
	Debug() IQuestionAnswerDo
	WithContext(ctx context.Context) IQuestionAnswerDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IQuestionAnswerDo
	WriteDB() IQuestionAnswerDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IQuestionAnswerDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IQuestionAnswerDo
	Not(conds ...gen.Condition) IQuestionAnswerDo
	Or(conds ...gen.Condition) IQuestionAnswerDo
	Select(conds ...field.Expr) IQuestionAnswerDo
	Where(conds ...gen.Condition) IQuestionAnswerDo
	Order(conds ...field.Expr) IQuestionAnswerDo
	Distinct(cols ...field.Expr) IQuestionAnswerDo
	Omit(cols ...field.Expr) IQuestionAnswerDo
	Join(table schema.Tabler, on ...field.Expr) IQuestionAnswerDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IQuestionAnswerDo
	RightJoin(table schema.Tabler, on ...field.Expr) IQuestionAnswerDo
	Group(cols ...field.Expr) IQuestionAnswerDo
	Having(conds ...gen.Condition) IQuestionAnswerDo
	Limit(limit int) IQuestionAnswerDo
	Offset(offset int) IQuestionAnswerDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IQuestionAnswerDo
	Unscoped() IQuestionAnswerDo
	Create(values ...*entity.QuestionAnswer) error
	CreateInBatches(values []*entity.QuestionAnswer, batchSize int) error
	Save(values ...*entity.QuestionAnswer) error
	First() (*entity.QuestionAnswer, error)
	Take() (*entity.QuestionAnswer, error)
	Last() (*entity.QuestionAnswer, error)
	Find() ([]*entity.QuestionAnswer, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.QuestionAnswer, err error)
	FindInBatches(result *[]*entity.QuestionAnswer, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.QuestionAnswer) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IQuestionAnswerDo
	Assign(attrs ...field.AssignExpr) IQuestionAnswerDo
	Joins(fields ...field.RelationField) IQuestionAnswerDo
	Preload(fields ...field.RelationField) IQuestionAnswerDo
	FirstOrInit() (*entity.QuestionAnswer, error)
	FirstOrCreate() (*entity.QuestionAnswer, error)
	FindByPage(offset int, limit int) (result []*entity.QuestionAnswer, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IQuestionAnswerDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (q questionAnswerDo) Debug() IQuestionAnswerDo {
	return q.withDO(q.DO.Debug())
}

func (q questionAnswerDo) WithContext(ctx context.Context) IQuestionAnswerDo {
	return q.withDO(q.DO.WithContext(ctx))
}

func (q questionAnswerDo) ReadDB() IQuestionAnswerDo {
	return q.Clauses(dbresolver.Read)
}

func (q questionAnswerDo) WriteDB() IQuestionAnswerDo {
	return q.Clauses(dbresolver.Write)
}

func (q questionAnswerDo) Session(config *gorm.Session) IQuestionAnswerDo {
	return q.withDO(q.DO.Session(config))
}

func (q questionAnswerDo) Clauses(conds ...clause.Expression) IQuestionAnswerDo {
	return q.withDO(q.DO.Clauses(conds...))
}

func (q questionAnswerDo) Returning(value interface{}, columns ...string) IQuestionAnswerDo {
	return q.withDO(q.DO.Returning(value, columns...))
}

func (q questionAnswerDo) Not(conds ...gen.Condition) IQuestionAnswerDo {
	return q.withDO(q.DO.Not(conds...))
}

func (q questionAnswerDo) Or(conds ...gen.Condition) IQuestionAnswerDo {
	return q.withDO(q.DO.Or(conds...))
}

func (q questionAnswerDo) Select(conds ...field.Expr) IQuestionAnswerDo {
	return q.withDO(q.DO.Select(conds...))
}

func (q questionAnswerDo) Where(conds ...gen.Condition) IQuestionAnswerDo {
	return q.withDO(q.DO.Where(conds...))
}

func (q questionAnswerDo) Order(conds ...field.Expr) IQuestionAnswerDo {
	return q.withDO(q.DO.Order(conds...))
}

func (q questionAnswerDo) Distinct(cols ...field.Expr) IQuestionAnswerDo {
	return q.withDO(q.DO.Distinct(cols...))
}

func (q questionAnswerDo) Omit(cols ...field.Expr) IQuestionAnswerDo {
	return q.withDO(q.DO.Omit(cols...))
}

func (q questionAnswerDo) Join(table schema.Tabler, on ...field.Expr) IQuestionAnswerDo {
	return q.withDO(q.DO.Join(table, on...))
}

func (q questionAnswerDo) LeftJoin(table schema.Tabler, on ...field.Expr) IQuestionAnswerDo {
	return q.withDO(q.DO.LeftJoin(table, on...))
}

func (q questionAnswerDo) RightJoin(table schema.Tabler, on ...field.Expr) IQuestionAnswerDo {
	return q.withDO(q.DO.RightJoin(table, on...))
}

func (q questionAnswerDo) Group(cols ...field.Expr) IQuestionAnswerDo {
	return q.withDO(q.DO.Group(cols...))
}

func (q questionAnswerDo) Having(conds ...gen.Condition) IQuestionAnswerDo {
	return q.withDO(q.DO.Having(conds...))
}

func (q questionAnswerDo) Limit(limit int) IQuestionAnswerDo {
	return q.withDO(q.DO.Limit(limit))
}

func (q questionAnswerDo) Offset(offset int) IQuestionAnswerDo {
	return q.withDO(q.DO.Offset(offset))
}

func (q questionAnswerDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IQuestionAnswerDo {
	return q.withDO(q.DO.Scopes(funcs...))
}

func (q questionAnswerDo) Unscoped() IQuestionAnswerDo {
	return q.withDO(q.DO.Unscoped())
}

func (q questionAnswerDo) Create(values ...*entity.QuestionAnswer) error {
	if len(values) == 0 {
		return nil
	}
	return q.DO.Create(values)
}

func (q questionAnswerDo) CreateInBatches(values []*entity.QuestionAnswer, batchSize int) error {
	return q.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (q questionAnswerDo) Save(values ...*entity.QuestionAnswer) error {
	if len(values) == 0 {
		return nil
	}
	return q.DO.Save(values)
}

func (q questionAnswerDo) First() (*entity.QuestionAnswer, error) {
	if result, err := q.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.QuestionAnswer), nil
	}
}

func (q questionAnswerDo) Take() (*entity.QuestionAnswer, error) {
	if result, err := q.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.QuestionAnswer), nil
	}
}

func (q questionAnswerDo) Last() (*entity.QuestionAnswer, error) {
	if result, err := q.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.QuestionAnswer), nil
	}
}

func (q questionAnswerDo) Find() ([]*entity.QuestionAnswer, error) {
	result, err := q.DO.Find()
	return result.([]*entity.QuestionAnswer), err
}

func (q questionAnswerDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.QuestionAnswer, err error) {
	buf := make([]*entity.QuestionAnswer, 0, batchSize)
	err = q.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (q questionAnswerDo) FindInBatches(result *[]*entity.QuestionAnswer, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return q.DO.FindInBatches(result, batchSize, fc)
}

func (q questionAnswerDo) Attrs(attrs ...field.AssignExpr) IQuestionAnswerDo {
	return q.withDO(q.DO.Attrs(attrs...))
}

func (q questionAnswerDo) Assign(attrs ...field.AssignExpr) IQuestionAnswerDo {
	return q.withDO(q.DO.Assign(attrs...))
}

func (q questionAnswerDo) Joins(fields ...field.RelationField) IQuestionAnswerDo {
	for _, _f := range fields {
		q = *q.withDO(q.DO.Joins(_f))
	}
	return &q
}

func (q questionAnswerDo) Preload(fields ...field.RelationField) IQuestionAnswerDo {
	for _, _f := range fields {
		q = *q.withDO(q.DO.Preload(_f))
	}
	return &q
}

func (q questionAnswerDo) FirstOrInit() (*entity.QuestionAnswer, error) {
	if result, err := q.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.QuestionAnswer), nil
	}
}

func (q questionAnswerDo) FirstOrCreate() (*entity.QuestionAnswer, error) {
	if result, err := q.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.QuestionAnswer), nil
	}
}

func (q questionAnswerDo) FindByPage(offset int, limit int) (result []*entity.QuestionAnswer, count int64, err error) {
	result, err = q.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = q.Offset(-1).Limit(-1).Count()
	return
}

func (q questionAnswerDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = q.Count()
	if err != nil {
		return
	}

	err = q.Offset(offset).Limit(limit).Scan(result)
	return
}

func (q questionAnswerDo) Scan(result interface{}) (err error) {
	return q.DO.Scan(result)
}

func (q questionAnswerDo) Delete(models ...*entity.QuestionAnswer) (result gen.ResultInfo, err error) {
	return q.DO.Delete(models)
}

func (q *questionAnswerDo) withDO(do gen.Dao) *questionAnswerDo {
	q.DO = *do.(*gen.DO)
	return q
}
