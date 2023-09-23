package models

import (
	"context"

	"github.com/google/uuid"
	"github.com/knailk/learning-platform/app/domain/entity"

	"github.com/knailk/learning-platform/db/postgresql/repository"
)

type GameModel struct {
	Repo *repository.PostgresRepository
}

func (m *GameModel) ListGames(ctx context.Context) ([]*entity.Game, error) {
	return m.Repo.Game.WithContext(ctx).Order(m.Repo.Game.Level).Find()
}

func (m *GameModel) CompleteGame(ctx context.Context, level int, userID uuid.UUID) error {
	game, err := m.Repo.Game.WithContext(ctx).Where(m.Repo.Game.Level.Eq(level)).First()
	if err != nil {
		return err
	}

	user, err := m.Repo.User.WithContext(ctx).Where(m.Repo.User.ID.Eq(userID)).First()
	if err != nil {
		return err
	}

	_, err = m.Repo.User.WithContext(ctx).Where(m.Repo.User.ID.Eq(userID)).Updates(&entity.User{
		CurrentGameLevel: game.Level,
		Score:            user.Score + game.Score,
	})
	if err != nil {
		return err
	}

	return nil
}
