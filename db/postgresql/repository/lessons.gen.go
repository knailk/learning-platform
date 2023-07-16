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

	"github.com/knailk/learning-platform/app/models"
)

func newLesson(db *gorm.DB, opts ...gen.DOOption) lesson {
	_lesson := lesson{}

	_lesson.lessonDo.UseDB(db, opts...)
	_lesson.lessonDo.UseModel(&models.Lesson{})

	tableName := _lesson.lessonDo.TableName()
	_lesson.ALL = field.NewAsterisk(tableName)
	_lesson.ID = field.NewField(tableName, "id")
	_lesson.ChapterID = field.NewField(tableName, "chapter_id")
	_lesson.Name = field.NewString(tableName, "name")
	_lesson.Tags = field.NewField(tableName, "tags")
	_lesson.UpdatedAt = field.NewTime(tableName, "updated_at")
	_lesson.CreatedAt = field.NewTime(tableName, "created_at")

	_lesson.fillFieldMap()

	return _lesson
}

type lesson struct {
	lessonDo lessonDo

	ALL       field.Asterisk
	ID        field.Field
	ChapterID field.Field
	Name      field.String
	Tags      field.Field
	UpdatedAt field.Time
	CreatedAt field.Time

	fieldMap map[string]field.Expr
}

func (l lesson) Table(newTableName string) *lesson {
	l.lessonDo.UseTable(newTableName)
	return l.updateTableName(newTableName)
}

func (l lesson) As(alias string) *lesson {
	l.lessonDo.DO = *(l.lessonDo.As(alias).(*gen.DO))
	return l.updateTableName(alias)
}

func (l *lesson) updateTableName(table string) *lesson {
	l.ALL = field.NewAsterisk(table)
	l.ID = field.NewField(table, "id")
	l.ChapterID = field.NewField(table, "chapter_id")
	l.Name = field.NewString(table, "name")
	l.Tags = field.NewField(table, "tags")
	l.UpdatedAt = field.NewTime(table, "updated_at")
	l.CreatedAt = field.NewTime(table, "created_at")

	l.fillFieldMap()

	return l
}

func (l *lesson) WithContext(ctx context.Context) ILessonDo { return l.lessonDo.WithContext(ctx) }

func (l lesson) TableName() string { return l.lessonDo.TableName() }

func (l lesson) Alias() string { return l.lessonDo.Alias() }

func (l lesson) Columns(cols ...field.Expr) gen.Columns { return l.lessonDo.Columns(cols...) }

func (l *lesson) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := l.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (l *lesson) fillFieldMap() {
	l.fieldMap = make(map[string]field.Expr, 6)
	l.fieldMap["id"] = l.ID
	l.fieldMap["chapter_id"] = l.ChapterID
	l.fieldMap["name"] = l.Name
	l.fieldMap["tags"] = l.Tags
	l.fieldMap["updated_at"] = l.UpdatedAt
	l.fieldMap["created_at"] = l.CreatedAt
}

func (l lesson) clone(db *gorm.DB) lesson {
	l.lessonDo.ReplaceConnPool(db.Statement.ConnPool)
	return l
}

func (l lesson) replaceDB(db *gorm.DB) lesson {
	l.lessonDo.ReplaceDB(db)
	return l
}

type lessonDo struct{ gen.DO }

type ILessonDo interface {
	gen.SubQuery
	Debug() ILessonDo
	WithContext(ctx context.Context) ILessonDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ILessonDo
	WriteDB() ILessonDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ILessonDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ILessonDo
	Not(conds ...gen.Condition) ILessonDo
	Or(conds ...gen.Condition) ILessonDo
	Select(conds ...field.Expr) ILessonDo
	Where(conds ...gen.Condition) ILessonDo
	Order(conds ...field.Expr) ILessonDo
	Distinct(cols ...field.Expr) ILessonDo
	Omit(cols ...field.Expr) ILessonDo
	Join(table schema.Tabler, on ...field.Expr) ILessonDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ILessonDo
	RightJoin(table schema.Tabler, on ...field.Expr) ILessonDo
	Group(cols ...field.Expr) ILessonDo
	Having(conds ...gen.Condition) ILessonDo
	Limit(limit int) ILessonDo
	Offset(offset int) ILessonDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ILessonDo
	Unscoped() ILessonDo
	Create(values ...*models.Lesson) error
	CreateInBatches(values []*models.Lesson, batchSize int) error
	Save(values ...*models.Lesson) error
	First() (*models.Lesson, error)
	Take() (*models.Lesson, error)
	Last() (*models.Lesson, error)
	Find() ([]*models.Lesson, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*models.Lesson, err error)
	FindInBatches(result *[]*models.Lesson, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*models.Lesson) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ILessonDo
	Assign(attrs ...field.AssignExpr) ILessonDo
	Joins(fields ...field.RelationField) ILessonDo
	Preload(fields ...field.RelationField) ILessonDo
	FirstOrInit() (*models.Lesson, error)
	FirstOrCreate() (*models.Lesson, error)
	FindByPage(offset int, limit int) (result []*models.Lesson, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ILessonDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (l lessonDo) Debug() ILessonDo {
	return l.withDO(l.DO.Debug())
}

func (l lessonDo) WithContext(ctx context.Context) ILessonDo {
	return l.withDO(l.DO.WithContext(ctx))
}

func (l lessonDo) ReadDB() ILessonDo {
	return l.Clauses(dbresolver.Read)
}

func (l lessonDo) WriteDB() ILessonDo {
	return l.Clauses(dbresolver.Write)
}

func (l lessonDo) Session(config *gorm.Session) ILessonDo {
	return l.withDO(l.DO.Session(config))
}

func (l lessonDo) Clauses(conds ...clause.Expression) ILessonDo {
	return l.withDO(l.DO.Clauses(conds...))
}

func (l lessonDo) Returning(value interface{}, columns ...string) ILessonDo {
	return l.withDO(l.DO.Returning(value, columns...))
}

func (l lessonDo) Not(conds ...gen.Condition) ILessonDo {
	return l.withDO(l.DO.Not(conds...))
}

func (l lessonDo) Or(conds ...gen.Condition) ILessonDo {
	return l.withDO(l.DO.Or(conds...))
}

func (l lessonDo) Select(conds ...field.Expr) ILessonDo {
	return l.withDO(l.DO.Select(conds...))
}

func (l lessonDo) Where(conds ...gen.Condition) ILessonDo {
	return l.withDO(l.DO.Where(conds...))
}

func (l lessonDo) Order(conds ...field.Expr) ILessonDo {
	return l.withDO(l.DO.Order(conds...))
}

func (l lessonDo) Distinct(cols ...field.Expr) ILessonDo {
	return l.withDO(l.DO.Distinct(cols...))
}

func (l lessonDo) Omit(cols ...field.Expr) ILessonDo {
	return l.withDO(l.DO.Omit(cols...))
}

func (l lessonDo) Join(table schema.Tabler, on ...field.Expr) ILessonDo {
	return l.withDO(l.DO.Join(table, on...))
}

func (l lessonDo) LeftJoin(table schema.Tabler, on ...field.Expr) ILessonDo {
	return l.withDO(l.DO.LeftJoin(table, on...))
}

func (l lessonDo) RightJoin(table schema.Tabler, on ...field.Expr) ILessonDo {
	return l.withDO(l.DO.RightJoin(table, on...))
}

func (l lessonDo) Group(cols ...field.Expr) ILessonDo {
	return l.withDO(l.DO.Group(cols...))
}

func (l lessonDo) Having(conds ...gen.Condition) ILessonDo {
	return l.withDO(l.DO.Having(conds...))
}

func (l lessonDo) Limit(limit int) ILessonDo {
	return l.withDO(l.DO.Limit(limit))
}

func (l lessonDo) Offset(offset int) ILessonDo {
	return l.withDO(l.DO.Offset(offset))
}

func (l lessonDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ILessonDo {
	return l.withDO(l.DO.Scopes(funcs...))
}

func (l lessonDo) Unscoped() ILessonDo {
	return l.withDO(l.DO.Unscoped())
}

func (l lessonDo) Create(values ...*models.Lesson) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Create(values)
}

func (l lessonDo) CreateInBatches(values []*models.Lesson, batchSize int) error {
	return l.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (l lessonDo) Save(values ...*models.Lesson) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Save(values)
}

func (l lessonDo) First() (*models.Lesson, error) {
	if result, err := l.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*models.Lesson), nil
	}
}

func (l lessonDo) Take() (*models.Lesson, error) {
	if result, err := l.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*models.Lesson), nil
	}
}

func (l lessonDo) Last() (*models.Lesson, error) {
	if result, err := l.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*models.Lesson), nil
	}
}

func (l lessonDo) Find() ([]*models.Lesson, error) {
	result, err := l.DO.Find()
	return result.([]*models.Lesson), err
}

func (l lessonDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*models.Lesson, err error) {
	buf := make([]*models.Lesson, 0, batchSize)
	err = l.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (l lessonDo) FindInBatches(result *[]*models.Lesson, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return l.DO.FindInBatches(result, batchSize, fc)
}

func (l lessonDo) Attrs(attrs ...field.AssignExpr) ILessonDo {
	return l.withDO(l.DO.Attrs(attrs...))
}

func (l lessonDo) Assign(attrs ...field.AssignExpr) ILessonDo {
	return l.withDO(l.DO.Assign(attrs...))
}

func (l lessonDo) Joins(fields ...field.RelationField) ILessonDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Joins(_f))
	}
	return &l
}

func (l lessonDo) Preload(fields ...field.RelationField) ILessonDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Preload(_f))
	}
	return &l
}

func (l lessonDo) FirstOrInit() (*models.Lesson, error) {
	if result, err := l.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*models.Lesson), nil
	}
}

func (l lessonDo) FirstOrCreate() (*models.Lesson, error) {
	if result, err := l.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*models.Lesson), nil
	}
}

func (l lessonDo) FindByPage(offset int, limit int) (result []*models.Lesson, count int64, err error) {
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

func (l lessonDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = l.Count()
	if err != nil {
		return
	}

	err = l.Offset(offset).Limit(limit).Scan(result)
	return
}

func (l lessonDo) Scan(result interface{}) (err error) {
	return l.DO.Scan(result)
}

func (l lessonDo) Delete(models ...*models.Lesson) (result gen.ResultInfo, err error) {
	return l.DO.Delete(models)
}

func (l *lessonDo) withDO(do gen.Dao) *lessonDo {
	l.DO = *do.(*gen.DO)
	return l
}
