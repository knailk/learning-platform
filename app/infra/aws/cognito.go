package aws

import (
	cognito "github.com/aws/aws-sdk-go/service/cognitoidentityprovider"
	iface "github.com/aws/aws-sdk-go/service/cognitoidentityprovider/cognitoidentityprovideriface"
)

type CognitoClient interface {
	iface.CognitoIdentityProviderAPI
}

type cognitoClient struct {
	*cognito.CognitoIdentityProvider
}

func NewCognitoClient(auth Session) CognitoClient {
	client := cognito.New(auth)
	return &cognitoClient{
		CognitoIdentityProvider: client,
	}
}
