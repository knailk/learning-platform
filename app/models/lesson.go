package models

import (
	"context"

	uuid "github.com/google/uuid"
	"github.com/knailk/learning-platform/app/entity"
	"github.com/knailk/learning-platform/db/postgresql/repository"
)

type LessonModel struct {
	Repo *repository.PostgresRepository
}

func (m *LessonModel) List(ctx context.Context) ([]*entity.Lesson, error) {
	return m.Repo.Lesson.WithContext(ctx).
		Order(m.Repo.Lesson.Level).
		Preload(m.Repo.Lesson.Questions.Order(m.Repo.Question.Level)).
		Preload(m.Repo.Lesson.Lectures.Order(m.Repo.Lecture.Level)).
		Find()
}

func (m *LessonModel) Get(ctx context.Context, id uuid.UUID) (*entity.Lesson, error) {
	return m.Repo.Lesson.WithContext(ctx).Where(m.Repo.Lesson.ID.Eq(id)).
		Preload(m.Repo.Lesson.Questions.Order(m.Repo.Question.Level)).
		Preload(m.Repo.Lesson.Lectures.Order(m.Repo.Lecture.Level)).
		First()
}

func (m *LessonModel) ListByChapterID(ctx context.Context, chapterID uuid.UUID) ([]*entity.Lesson, error) {
	return m.Repo.Lesson.WithContext(ctx).
		Where(m.Repo.Lesson.ChapterID.Eq(chapterID)).
		Order(m.Repo.Lesson.Level).
		Preload(m.Repo.Lesson.Questions.Order(m.Repo.Question.Level)).
		Preload(m.Repo.Lesson.Lectures.Order(m.Repo.Lecture.Level)).
		Find()
}
