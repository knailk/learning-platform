package aws

import (
	"github.com/aws/aws-sdk-go/service/ses"
	"github.com/aws/aws-sdk-go/service/ses/sesiface"
)

type SesClient interface {
	sesiface.SESAPI
}

type sesClient struct {
	*ses.SES
}

func NewSesClient(sess Session) SesClient {
	client := ses.New(sess)
	return &sesClient{
		SES: client,
	}
}
