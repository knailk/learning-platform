package main

import (
	"github.com/knailk/learning-platform/app/entity"
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
		entity.Follow{},
		entity.Rank{},
		entity.Chapter{},
		entity.Lesson{},
		entity.Question{},
		entity.QuestionAnswer{},
		entity.LessonAnswer{},
	)

	// Execute the generator
	g.Execute()
}
