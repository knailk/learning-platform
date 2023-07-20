// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package repository

import (
	"context"
	"database/sql"

	"gorm.io/gorm"

	"gorm.io/gen"

	"gorm.io/plugin/dbresolver"
)

var (
	Q              = new(Query)
	Chapter        *chapter
	Follow         *follow
	Lesson         *lesson
	LessonAnswer   *lessonAnswer
	Question       *question
	QuestionAnswer *questionAnswer
	User           *user
)

func SetDefault(db *gorm.DB, opts ...gen.DOOption) {
	*Q = *Use(db, opts...)
	Chapter = &Q.Chapter
	Follow = &Q.Follow
	Lesson = &Q.Lesson
	LessonAnswer = &Q.LessonAnswer
	Question = &Q.Question
	QuestionAnswer = &Q.QuestionAnswer
	User = &Q.User
}

func Use(db *gorm.DB, opts ...gen.DOOption) *Query {
	return &Query{
		db:             db,
		Chapter:        newChapter(db, opts...),
		Follow:         newFollow(db, opts...),
		Lesson:         newLesson(db, opts...),
		LessonAnswer:   newLessonAnswer(db, opts...),
		Question:       newQuestion(db, opts...),
		QuestionAnswer: newQuestionAnswer(db, opts...),
		User:           newUser(db, opts...),
	}
}

type Query struct {
	db *gorm.DB

	Chapter        chapter
	Follow         follow
	Lesson         lesson
	LessonAnswer   lessonAnswer
	Question       question
	QuestionAnswer questionAnswer
	User           user
}

func (q *Query) Available() bool { return q.db != nil }

func (q *Query) clone(db *gorm.DB) *Query {
	return &Query{
		db:             db,
		Chapter:        q.Chapter.clone(db),
		Follow:         q.Follow.clone(db),
		Lesson:         q.Lesson.clone(db),
		LessonAnswer:   q.LessonAnswer.clone(db),
		Question:       q.Question.clone(db),
		QuestionAnswer: q.QuestionAnswer.clone(db),
		User:           q.User.clone(db),
	}
}

func (q *Query) ReadDB() *Query {
	return q.ReplaceDB(q.db.Clauses(dbresolver.Read))
}

func (q *Query) WriteDB() *Query {
	return q.ReplaceDB(q.db.Clauses(dbresolver.Write))
}

func (q *Query) ReplaceDB(db *gorm.DB) *Query {
	return &Query{
		db:             db,
		Chapter:        q.Chapter.replaceDB(db),
		Follow:         q.Follow.replaceDB(db),
		Lesson:         q.Lesson.replaceDB(db),
		LessonAnswer:   q.LessonAnswer.replaceDB(db),
		Question:       q.Question.replaceDB(db),
		QuestionAnswer: q.QuestionAnswer.replaceDB(db),
		User:           q.User.replaceDB(db),
	}
}

type queryCtx struct {
	Chapter        IChapterDo
	Follow         IFollowDo
	Lesson         ILessonDo
	LessonAnswer   ILessonAnswerDo
	Question       IQuestionDo
	QuestionAnswer IQuestionAnswerDo
	User           IUserDo
}

func (q *Query) WithContext(ctx context.Context) *queryCtx {
	return &queryCtx{
		Chapter:        q.Chapter.WithContext(ctx),
		Follow:         q.Follow.WithContext(ctx),
		Lesson:         q.Lesson.WithContext(ctx),
		LessonAnswer:   q.LessonAnswer.WithContext(ctx),
		Question:       q.Question.WithContext(ctx),
		QuestionAnswer: q.QuestionAnswer.WithContext(ctx),
		User:           q.User.WithContext(ctx),
	}
}

func (q *Query) Transaction(fc func(tx *Query) error, opts ...*sql.TxOptions) error {
	return q.db.Transaction(func(tx *gorm.DB) error { return fc(q.clone(tx)) }, opts...)
}

func (q *Query) Begin(opts ...*sql.TxOptions) *QueryTx {
	tx := q.db.Begin(opts...)
	return &QueryTx{Query: q.clone(tx), Error: tx.Error}
}

type QueryTx struct {
	*Query
	Error error
}

func (q *QueryTx) Commit() error {
	return q.db.Commit().Error
}

func (q *QueryTx) Rollback() error {
	return q.db.Rollback().Error
}

func (q *QueryTx) SavePoint(name string) error {
	return q.db.SavePoint(name).Error
}

func (q *QueryTx) RollbackTo(name string) error {
	return q.db.RollbackTo(name).Error
}
