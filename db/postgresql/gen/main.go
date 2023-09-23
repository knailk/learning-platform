package main

import (
	"github.com/knailk/learning-platform/app/domain/entity"
	"github.com/knailk/learning-platform/app/domain/repository"
	"gorm.io/gen"
)

func main() {
	// Initialize the generator with configuration
	g := gen.NewGenerator(gen.Config{
		OutPath:       "./db/postgresql/repository",
		Mode:          gen.WithDefaultQuery | gen.WithQueryInterface,
		FieldNullable: true,
	})
	g.ApplyBasic(
		entity.User{},
		entity.UserToken{},
		entity.Follow{},
		entity.Chapter{},
		entity.Lesson{},
		entity.Question{},
		entity.Lecture{},
		entity.QuestionAnswer{},
		entity.LessonAnswer{},

		entity.Problem{},
		entity.Solution{},
		entity.TestCase{},

		entity.Game{},
	)

	g.ApplyInterface(func(repository.UserRepository) {}, entity.User{})

	// Execute the generator
	g.Execute()
}
