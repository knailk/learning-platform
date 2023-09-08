package models

import (
	"context"
	"errors"

	uuid "github.com/google/uuid"
	"github.com/knailk/learning-platform/app/domain/entity"
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

func (m *LessonModel) CreateAnswer(ctx context.Context, lessonAnswer entity.LessonAnswer) error {
	count, err := m.Repo.LessonAnswer.WithContext(ctx).Where(m.Repo.LessonAnswer.LessonID.Eq(lessonAnswer.LessonID), m.Repo.LessonAnswer.UserID.Eq(lessonAnswer.UserID)).Count()
	if err != nil {
		return err
	}

	if count > 0 {
		return errors.New("you already answered this lesson")
	}

	lessonAnswer.ID = uuid.New()

	lesson, err := m.Repo.Lesson.WithContext(ctx).Where(m.Repo.Lesson.ID.Eq(lessonAnswer.LessonID)).First()
	if err != nil {
		return err
	}

	for i := range lessonAnswer.QuestionAnswers {
		lessonAnswer.QuestionAnswers[i].ID = uuid.New()
		lessonAnswer.QuestionAnswers[i].LessonAnswerID = lessonAnswer.ID
	}

	// get user to update score
	user, err := m.Repo.User.WithContext(ctx).Where(m.Repo.User.ID.Eq(lessonAnswer.UserID)).First()
	if err != nil {
		return err
	}

	_, err = m.Repo.User.WithContext(ctx).Where(m.Repo.User.ID.Eq(lessonAnswer.UserID)).Updates(entity.User{
		Score:         user.Score + lesson.Score + lessonAnswer.Score,
		CurrentLesson: lesson.ID,
	})
	if err != nil {
		return err
	}

	return m.Repo.LessonAnswer.WithContext(ctx).Create(&lessonAnswer)
}

func (m *LessonModel) GetAnswer(ctx context.Context, userID uuid.UUID, lessonID uuid.UUID) (*entity.LessonAnswer, error) {
	return m.Repo.LessonAnswer.
		WithContext(ctx).
		Where(
			m.Repo.LessonAnswer.LessonID.Eq(lessonID),
			m.Repo.LessonAnswer.UserID.Eq(userID)).
		Preload(m.Repo.LessonAnswer.QuestionAnswers).
		First()
}
