package sesclient

import (
	"context"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/ses"
	"github.com/knailk/learning-platform/app/domain/repository"
	repoIn "github.com/knailk/learning-platform/app/domain/repository/in/ses"
	awsInfra "github.com/knailk/learning-platform/app/infra/aws"
)

type sesRepository struct {
	client awsInfra.SesClient
}

func NewSesRepository(client awsInfra.SesClient) repository.SesRepository {
	return &sesRepository{
		client: client,
	}
}

func (r *sesRepository) SendEmail(ctx context.Context, in repoIn.SendEmailInput) (*ses.SendEmailOutput, error) {
	input := &ses.SendEmailInput{
		Destination: &ses.Destination{
			ToAddresses:  buildAddressString(in.ToAddresses),
			BccAddresses: buildAddressString(in.BccAddresses),
			CcAddresses:  buildAddressString(in.CcAddresses),
		},
		Message: &ses.Message{
			Body: &ses.Body{
				Html: &ses.Content{
					Charset: aws.String(in.Charset),
					Data:    aws.String(in.Body),
				},
			},
			Subject: &ses.Content{
				Charset: aws.String(in.Charset),
				Data:    aws.String(in.Subject),
			},
		},
		Source: aws.String(in.From),
	}

	res, err := r.client.SendEmail(input)
	if err != nil {
		return nil, err
	}

	return res, nil
}

func buildAddressString(addresses []string) []*string {
	var addressString []*string
	for _, address := range addresses {
		addressString = append(addressString, aws.String(address))
	}
	return addressString
}
