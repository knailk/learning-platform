package main

import (
	"github.com/knailk/learning-platform/app/models"
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
		models.User{},
	)

	// Execute the generator
	g.Execute()
}
