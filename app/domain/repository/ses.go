package repository

import (
	"context"

	"github.com/aws/aws-sdk-go/service/ses"
	repoIn "github.com/knailk/learning-platform/app/domain/repository/in/ses"
)

type SesRepository interface {
	SendEmail(ctx context.Context, in repoIn.SendEmailInput) (*ses.SendEmailOutput, error)
}
