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

func newLecture(db *gorm.DB, opts ...gen.DOOption) lecture {
	_lecture := lecture{}

	_lecture.lectureDo.UseDB(db, opts...)
	_lecture.lectureDo.UseModel(&entity.Lecture{})

	tableName := _lecture.lectureDo.TableName()
	_lecture.ALL = field.NewAsterisk(tableName)
	_lecture.ID = field.NewField(tableName, "id")
	_lecture.LessonID = field.NewField(tableName, "lesson_id")
	_lecture.Level = field.NewInt(tableName, "level")
	_lecture.AnswerType = field.NewString(tableName, "answer_type")
	_lecture.Content = field.NewString(tableName, "content")
	_lecture.Required = field.NewBool(tableName, "required")
	_lecture.UpdatedAt = field.NewTime(tableName, "updated_at")
	_lecture.CreatedAt = field.NewTime(tableName, "created_at")

	_lecture.fillFieldMap()

	return _lecture
}

type lecture struct {
	lectureDo lectureDo

	ALL        field.Asterisk
	ID         field.Field
	LessonID   field.Field
	Level      field.Int
	AnswerType field.String
	Content    field.String
	Required   field.Bool
	UpdatedAt  field.Time
	CreatedAt  field.Time

	fieldMap map[string]field.Expr
}

func (l lecture) Table(newTableName string) *lecture {
	l.lectureDo.UseTable(newTableName)
	return l.updateTableName(newTableName)
}

func (l lecture) As(alias string) *lecture {
	l.lectureDo.DO = *(l.lectureDo.As(alias).(*gen.DO))
	return l.updateTableName(alias)
}

func (l *lecture) updateTableName(table string) *lecture {
	l.ALL = field.NewAsterisk(table)
	l.ID = field.NewField(table, "id")
	l.LessonID = field.NewField(table, "lesson_id")
	l.Level = field.NewInt(table, "level")
	l.AnswerType = field.NewString(table, "answer_type")
	l.Content = field.NewString(table, "content")
	l.Required = field.NewBool(table, "required")
	l.UpdatedAt = field.NewTime(table, "updated_at")
	l.CreatedAt = field.NewTime(table, "created_at")

	l.fillFieldMap()

	return l
}

func (l *lecture) WithContext(ctx context.Context) ILectureDo { return l.lectureDo.WithContext(ctx) }

func (l lecture) TableName() string { return l.lectureDo.TableName() }

func (l lecture) Alias() string { return l.lectureDo.Alias() }

func (l lecture) Columns(cols ...field.Expr) gen.Columns { return l.lectureDo.Columns(cols...) }

func (l *lecture) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := l.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (l *lecture) fillFieldMap() {
	l.fieldMap = make(map[string]field.Expr, 8)
	l.fieldMap["id"] = l.ID
	l.fieldMap["lesson_id"] = l.LessonID
	l.fieldMap["level"] = l.Level
	l.fieldMap["answer_type"] = l.AnswerType
	l.fieldMap["content"] = l.Content
	l.fieldMap["required"] = l.Required
	l.fieldMap["updated_at"] = l.UpdatedAt
	l.fieldMap["created_at"] = l.CreatedAt
}

func (l lecture) clone(db *gorm.DB) lecture {
	l.lectureDo.ReplaceConnPool(db.Statement.ConnPool)
	return l
}

func (l lecture) replaceDB(db *gorm.DB) lecture {
	l.lectureDo.ReplaceDB(db)
	return l
}

type lectureDo struct{ gen.DO }

type ILectureDo interface {
	gen.SubQuery
	Debug() ILectureDo
	WithContext(ctx context.Context) ILectureDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ILectureDo
	WriteDB() ILectureDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ILectureDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ILectureDo
	Not(conds ...gen.Condition) ILectureDo
	Or(conds ...gen.Condition) ILectureDo
	Select(conds ...field.Expr) ILectureDo
	Where(conds ...gen.Condition) ILectureDo
	Order(conds ...field.Expr) ILectureDo
	Distinct(cols ...field.Expr) ILectureDo
	Omit(cols ...field.Expr) ILectureDo
	Join(table schema.Tabler, on ...field.Expr) ILectureDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ILectureDo
	RightJoin(table schema.Tabler, on ...field.Expr) ILectureDo
	Group(cols ...field.Expr) ILectureDo
	Having(conds ...gen.Condition) ILectureDo
	Limit(limit int) ILectureDo
	Offset(offset int) ILectureDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ILectureDo
	Unscoped() ILectureDo
	Create(values ...*entity.Lecture) error
	CreateInBatches(values []*entity.Lecture, batchSize int) error
	Save(values ...*entity.Lecture) error
	First() (*entity.Lecture, error)
	Take() (*entity.Lecture, error)
	Last() (*entity.Lecture, error)
	Find() ([]*entity.Lecture, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Lecture, err error)
	FindInBatches(result *[]*entity.Lecture, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.Lecture) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ILectureDo
	Assign(attrs ...field.AssignExpr) ILectureDo
	Joins(fields ...field.RelationField) ILectureDo
	Preload(fields ...field.RelationField) ILectureDo
	FirstOrInit() (*entity.Lecture, error)
	FirstOrCreate() (*entity.Lecture, error)
	FindByPage(offset int, limit int) (result []*entity.Lecture, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ILectureDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (l lectureDo) Debug() ILectureDo {
	return l.withDO(l.DO.Debug())
}

func (l lectureDo) WithContext(ctx context.Context) ILectureDo {
	return l.withDO(l.DO.WithContext(ctx))
}

func (l lectureDo) ReadDB() ILectureDo {
	return l.Clauses(dbresolver.Read)
}

func (l lectureDo) WriteDB() ILectureDo {
	return l.Clauses(dbresolver.Write)
}

func (l lectureDo) Session(config *gorm.Session) ILectureDo {
	return l.withDO(l.DO.Session(config))
}

func (l lectureDo) Clauses(conds ...clause.Expression) ILectureDo {
	return l.withDO(l.DO.Clauses(conds...))
}

func (l lectureDo) Returning(value interface{}, columns ...string) ILectureDo {
	return l.withDO(l.DO.Returning(value, columns...))
}

func (l lectureDo) Not(conds ...gen.Condition) ILectureDo {
	return l.withDO(l.DO.Not(conds...))
}

func (l lectureDo) Or(conds ...gen.Condition) ILectureDo {
	return l.withDO(l.DO.Or(conds...))
}

func (l lectureDo) Select(conds ...field.Expr) ILectureDo {
	return l.withDO(l.DO.Select(conds...))
}

func (l lectureDo) Where(conds ...gen.Condition) ILectureDo {
	return l.withDO(l.DO.Where(conds...))
}

func (l lectureDo) Order(conds ...field.Expr) ILectureDo {
	return l.withDO(l.DO.Order(conds...))
}

func (l lectureDo) Distinct(cols ...field.Expr) ILectureDo {
	return l.withDO(l.DO.Distinct(cols...))
}

func (l lectureDo) Omit(cols ...field.Expr) ILectureDo {
	return l.withDO(l.DO.Omit(cols...))
}

func (l lectureDo) Join(table schema.Tabler, on ...field.Expr) ILectureDo {
	return l.withDO(l.DO.Join(table, on...))
}

func (l lectureDo) LeftJoin(table schema.Tabler, on ...field.Expr) ILectureDo {
	return l.withDO(l.DO.LeftJoin(table, on...))
}

func (l lectureDo) RightJoin(table schema.Tabler, on ...field.Expr) ILectureDo {
	return l.withDO(l.DO.RightJoin(table, on...))
}

func (l lectureDo) Group(cols ...field.Expr) ILectureDo {
	return l.withDO(l.DO.Group(cols...))
}

func (l lectureDo) Having(conds ...gen.Condition) ILectureDo {
	return l.withDO(l.DO.Having(conds...))
}

func (l lectureDo) Limit(limit int) ILectureDo {
	return l.withDO(l.DO.Limit(limit))
}

func (l lectureDo) Offset(offset int) ILectureDo {
	return l.withDO(l.DO.Offset(offset))
}

func (l lectureDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ILectureDo {
	return l.withDO(l.DO.Scopes(funcs...))
}

func (l lectureDo) Unscoped() ILectureDo {
	return l.withDO(l.DO.Unscoped())
}

func (l lectureDo) Create(values ...*entity.Lecture) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Create(values)
}

func (l lectureDo) CreateInBatches(values []*entity.Lecture, batchSize int) error {
	return l.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (l lectureDo) Save(values ...*entity.Lecture) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Save(values)
}

func (l lectureDo) First() (*entity.Lecture, error) {
	if result, err := l.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Lecture), nil
	}
}

func (l lectureDo) Take() (*entity.Lecture, error) {
	if result, err := l.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Lecture), nil
	}
}

func (l lectureDo) Last() (*entity.Lecture, error) {
	if result, err := l.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Lecture), nil
	}
}

func (l lectureDo) Find() ([]*entity.Lecture, error) {
	result, err := l.DO.Find()
	return result.([]*entity.Lecture), err
}

func (l lectureDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Lecture, err error) {
	buf := make([]*entity.Lecture, 0, batchSize)
	err = l.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (l lectureDo) FindInBatches(result *[]*entity.Lecture, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return l.DO.FindInBatches(result, batchSize, fc)
}

func (l lectureDo) Attrs(attrs ...field.AssignExpr) ILectureDo {
	return l.withDO(l.DO.Attrs(attrs...))
}

func (l lectureDo) Assign(attrs ...field.AssignExpr) ILectureDo {
	return l.withDO(l.DO.Assign(attrs...))
}

func (l lectureDo) Joins(fields ...field.RelationField) ILectureDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Joins(_f))
	}
	return &l
}

func (l lectureDo) Preload(fields ...field.RelationField) ILectureDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Preload(_f))
	}
	return &l
}

func (l lectureDo) FirstOrInit() (*entity.Lecture, error) {
	if result, err := l.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Lecture), nil
	}
}

func (l lectureDo) FirstOrCreate() (*entity.Lecture, error) {
	if result, err := l.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Lecture), nil
	}
}

func (l lectureDo) FindByPage(offset int, limit int) (result []*entity.Lecture, count int64, err error) {
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

func (l lectureDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = l.Count()
	if err != nil {
		return
	}

	err = l.Offset(offset).Limit(limit).Scan(result)
	return
}

func (l lectureDo) Scan(result interface{}) (err error) {
	return l.DO.Scan(result)
}

func (l lectureDo) Delete(models ...*entity.Lecture) (result gen.ResultInfo, err error) {
	return l.DO.Delete(models)
}

func (l *lectureDo) withDO(do gen.Dao) *lectureDo {
	l.DO = *do.(*gen.DO)
	return l
}
