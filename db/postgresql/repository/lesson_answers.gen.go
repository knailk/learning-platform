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

func newLessonAnswer(db *gorm.DB, opts ...gen.DOOption) lessonAnswer {
	_lessonAnswer := lessonAnswer{}

	_lessonAnswer.lessonAnswerDo.UseDB(db, opts...)
	_lessonAnswer.lessonAnswerDo.UseModel(&entity.LessonAnswer{})

	tableName := _lessonAnswer.lessonAnswerDo.TableName()
	_lessonAnswer.ALL = field.NewAsterisk(tableName)
	_lessonAnswer.ID = field.NewField(tableName, "id")
	_lessonAnswer.LessonAnswerID = field.NewField(tableName, "lesson_answer_id")
	_lessonAnswer.QuestionID = field.NewField(tableName, "question_id")
	_lessonAnswer.Answer = field.NewString(tableName, "answer")
	_lessonAnswer.Score = field.NewInt(tableName, "score")
	_lessonAnswer.UpdatedAt = field.NewTime(tableName, "updated_at")
	_lessonAnswer.CreatedAt = field.NewTime(tableName, "created_at")

	_lessonAnswer.fillFieldMap()

	return _lessonAnswer
}

type lessonAnswer struct {
	lessonAnswerDo lessonAnswerDo

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

func (l lessonAnswer) Table(newTableName string) *lessonAnswer {
	l.lessonAnswerDo.UseTable(newTableName)
	return l.updateTableName(newTableName)
}

func (l lessonAnswer) As(alias string) *lessonAnswer {
	l.lessonAnswerDo.DO = *(l.lessonAnswerDo.As(alias).(*gen.DO))
	return l.updateTableName(alias)
}

func (l *lessonAnswer) updateTableName(table string) *lessonAnswer {
	l.ALL = field.NewAsterisk(table)
	l.ID = field.NewField(table, "id")
	l.LessonAnswerID = field.NewField(table, "lesson_answer_id")
	l.QuestionID = field.NewField(table, "question_id")
	l.Answer = field.NewString(table, "answer")
	l.Score = field.NewInt(table, "score")
	l.UpdatedAt = field.NewTime(table, "updated_at")
	l.CreatedAt = field.NewTime(table, "created_at")

	l.fillFieldMap()

	return l
}

func (l *lessonAnswer) WithContext(ctx context.Context) ILessonAnswerDo {
	return l.lessonAnswerDo.WithContext(ctx)
}

func (l lessonAnswer) TableName() string { return l.lessonAnswerDo.TableName() }

func (l lessonAnswer) Alias() string { return l.lessonAnswerDo.Alias() }

func (l lessonAnswer) Columns(cols ...field.Expr) gen.Columns {
	return l.lessonAnswerDo.Columns(cols...)
}

func (l *lessonAnswer) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := l.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (l *lessonAnswer) fillFieldMap() {
	l.fieldMap = make(map[string]field.Expr, 7)
	l.fieldMap["id"] = l.ID
	l.fieldMap["lesson_answer_id"] = l.LessonAnswerID
	l.fieldMap["question_id"] = l.QuestionID
	l.fieldMap["answer"] = l.Answer
	l.fieldMap["score"] = l.Score
	l.fieldMap["updated_at"] = l.UpdatedAt
	l.fieldMap["created_at"] = l.CreatedAt
}

func (l lessonAnswer) clone(db *gorm.DB) lessonAnswer {
	l.lessonAnswerDo.ReplaceConnPool(db.Statement.ConnPool)
	return l
}

func (l lessonAnswer) replaceDB(db *gorm.DB) lessonAnswer {
	l.lessonAnswerDo.ReplaceDB(db)
	return l
}

type lessonAnswerDo struct{ gen.DO }

type ILessonAnswerDo interface {
	gen.SubQuery
	Debug() ILessonAnswerDo
	WithContext(ctx context.Context) ILessonAnswerDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ILessonAnswerDo
	WriteDB() ILessonAnswerDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ILessonAnswerDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ILessonAnswerDo
	Not(conds ...gen.Condition) ILessonAnswerDo
	Or(conds ...gen.Condition) ILessonAnswerDo
	Select(conds ...field.Expr) ILessonAnswerDo
	Where(conds ...gen.Condition) ILessonAnswerDo
	Order(conds ...field.Expr) ILessonAnswerDo
	Distinct(cols ...field.Expr) ILessonAnswerDo
	Omit(cols ...field.Expr) ILessonAnswerDo
	Join(table schema.Tabler, on ...field.Expr) ILessonAnswerDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ILessonAnswerDo
	RightJoin(table schema.Tabler, on ...field.Expr) ILessonAnswerDo
	Group(cols ...field.Expr) ILessonAnswerDo
	Having(conds ...gen.Condition) ILessonAnswerDo
	Limit(limit int) ILessonAnswerDo
	Offset(offset int) ILessonAnswerDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ILessonAnswerDo
	Unscoped() ILessonAnswerDo
	Create(values ...*entity.LessonAnswer) error
	CreateInBatches(values []*entity.LessonAnswer, batchSize int) error
	Save(values ...*entity.LessonAnswer) error
	First() (*entity.LessonAnswer, error)
	Take() (*entity.LessonAnswer, error)
	Last() (*entity.LessonAnswer, error)
	Find() ([]*entity.LessonAnswer, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.LessonAnswer, err error)
	FindInBatches(result *[]*entity.LessonAnswer, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.LessonAnswer) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ILessonAnswerDo
	Assign(attrs ...field.AssignExpr) ILessonAnswerDo
	Joins(fields ...field.RelationField) ILessonAnswerDo
	Preload(fields ...field.RelationField) ILessonAnswerDo
	FirstOrInit() (*entity.LessonAnswer, error)
	FirstOrCreate() (*entity.LessonAnswer, error)
	FindByPage(offset int, limit int) (result []*entity.LessonAnswer, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ILessonAnswerDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (l lessonAnswerDo) Debug() ILessonAnswerDo {
	return l.withDO(l.DO.Debug())
}

func (l lessonAnswerDo) WithContext(ctx context.Context) ILessonAnswerDo {
	return l.withDO(l.DO.WithContext(ctx))
}

func (l lessonAnswerDo) ReadDB() ILessonAnswerDo {
	return l.Clauses(dbresolver.Read)
}

func (l lessonAnswerDo) WriteDB() ILessonAnswerDo {
	return l.Clauses(dbresolver.Write)
}

func (l lessonAnswerDo) Session(config *gorm.Session) ILessonAnswerDo {
	return l.withDO(l.DO.Session(config))
}

func (l lessonAnswerDo) Clauses(conds ...clause.Expression) ILessonAnswerDo {
	return l.withDO(l.DO.Clauses(conds...))
}

func (l lessonAnswerDo) Returning(value interface{}, columns ...string) ILessonAnswerDo {
	return l.withDO(l.DO.Returning(value, columns...))
}

func (l lessonAnswerDo) Not(conds ...gen.Condition) ILessonAnswerDo {
	return l.withDO(l.DO.Not(conds...))
}

func (l lessonAnswerDo) Or(conds ...gen.Condition) ILessonAnswerDo {
	return l.withDO(l.DO.Or(conds...))
}

func (l lessonAnswerDo) Select(conds ...field.Expr) ILessonAnswerDo {
	return l.withDO(l.DO.Select(conds...))
}

func (l lessonAnswerDo) Where(conds ...gen.Condition) ILessonAnswerDo {
	return l.withDO(l.DO.Where(conds...))
}

func (l lessonAnswerDo) Order(conds ...field.Expr) ILessonAnswerDo {
	return l.withDO(l.DO.Order(conds...))
}

func (l lessonAnswerDo) Distinct(cols ...field.Expr) ILessonAnswerDo {
	return l.withDO(l.DO.Distinct(cols...))
}

func (l lessonAnswerDo) Omit(cols ...field.Expr) ILessonAnswerDo {
	return l.withDO(l.DO.Omit(cols...))
}

func (l lessonAnswerDo) Join(table schema.Tabler, on ...field.Expr) ILessonAnswerDo {
	return l.withDO(l.DO.Join(table, on...))
}

func (l lessonAnswerDo) LeftJoin(table schema.Tabler, on ...field.Expr) ILessonAnswerDo {
	return l.withDO(l.DO.LeftJoin(table, on...))
}

func (l lessonAnswerDo) RightJoin(table schema.Tabler, on ...field.Expr) ILessonAnswerDo {
	return l.withDO(l.DO.RightJoin(table, on...))
}

func (l lessonAnswerDo) Group(cols ...field.Expr) ILessonAnswerDo {
	return l.withDO(l.DO.Group(cols...))
}

func (l lessonAnswerDo) Having(conds ...gen.Condition) ILessonAnswerDo {
	return l.withDO(l.DO.Having(conds...))
}

func (l lessonAnswerDo) Limit(limit int) ILessonAnswerDo {
	return l.withDO(l.DO.Limit(limit))
}

func (l lessonAnswerDo) Offset(offset int) ILessonAnswerDo {
	return l.withDO(l.DO.Offset(offset))
}

func (l lessonAnswerDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ILessonAnswerDo {
	return l.withDO(l.DO.Scopes(funcs...))
}

func (l lessonAnswerDo) Unscoped() ILessonAnswerDo {
	return l.withDO(l.DO.Unscoped())
}

func (l lessonAnswerDo) Create(values ...*entity.LessonAnswer) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Create(values)
}

func (l lessonAnswerDo) CreateInBatches(values []*entity.LessonAnswer, batchSize int) error {
	return l.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (l lessonAnswerDo) Save(values ...*entity.LessonAnswer) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Save(values)
}

func (l lessonAnswerDo) First() (*entity.LessonAnswer, error) {
	if result, err := l.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.LessonAnswer), nil
	}
}

func (l lessonAnswerDo) Take() (*entity.LessonAnswer, error) {
	if result, err := l.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.LessonAnswer), nil
	}
}

func (l lessonAnswerDo) Last() (*entity.LessonAnswer, error) {
	if result, err := l.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.LessonAnswer), nil
	}
}

func (l lessonAnswerDo) Find() ([]*entity.LessonAnswer, error) {
	result, err := l.DO.Find()
	return result.([]*entity.LessonAnswer), err
}

func (l lessonAnswerDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.LessonAnswer, err error) {
	buf := make([]*entity.LessonAnswer, 0, batchSize)
	err = l.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (l lessonAnswerDo) FindInBatches(result *[]*entity.LessonAnswer, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return l.DO.FindInBatches(result, batchSize, fc)
}

func (l lessonAnswerDo) Attrs(attrs ...field.AssignExpr) ILessonAnswerDo {
	return l.withDO(l.DO.Attrs(attrs...))
}

func (l lessonAnswerDo) Assign(attrs ...field.AssignExpr) ILessonAnswerDo {
	return l.withDO(l.DO.Assign(attrs...))
}

func (l lessonAnswerDo) Joins(fields ...field.RelationField) ILessonAnswerDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Joins(_f))
	}
	return &l
}

func (l lessonAnswerDo) Preload(fields ...field.RelationField) ILessonAnswerDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Preload(_f))
	}
	return &l
}

func (l lessonAnswerDo) FirstOrInit() (*entity.LessonAnswer, error) {
	if result, err := l.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.LessonAnswer), nil
	}
}

func (l lessonAnswerDo) FirstOrCreate() (*entity.LessonAnswer, error) {
	if result, err := l.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.LessonAnswer), nil
	}
}

func (l lessonAnswerDo) FindByPage(offset int, limit int) (result []*entity.LessonAnswer, count int64, err error) {
	result, err = l.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = l.Offset(-1).Limit(-1).Count()
	return
}

func (l lessonAnswerDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = l.Count()
	if err != nil {
		return
	}

	err = l.Offset(offset).Limit(limit).Scan(result)
	return
}

func (l lessonAnswerDo) Scan(result interface{}) (err error) {
	return l.DO.Scan(result)
}

func (l lessonAnswerDo) Delete(models ...*entity.LessonAnswer) (result gen.ResultInfo, err error) {
	return l.DO.Delete(models)
}

func (l *lessonAnswerDo) withDO(do gen.Dao) *lessonAnswerDo {
	l.DO = *do.(*gen.DO)
	return l
}