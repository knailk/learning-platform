package cognito

// SignIn holds the information required for user sign in
type SignIn struct {
	Username string
	Password string
}

// SignUp holds the information required for user sign up
type SignUp struct {
	Username string
	Password string
}

// ConfirmRegister holds the information required for user confirmation sign up
type ConfirmRegister struct {
	Username         string
	ConfirmationCode string
}

// ForgotPassword holds the information required for user reset password
type ForgotPassword struct {
	Username string
}

// ChangePassword holds the information required for user change password
type ChangePassword struct {
	AccessToken      string
	PreviousPassword string
	ProposedPassword string
}

// ResendConfirmationCode holds the information required for user reset password
type ResendConfirmationCode struct {
	Username string
}

// ConfirmForgotPassword holds the information required for user reset password confirmation
type ConfirmForgotPassword struct {
	Username             string
	ConfirmationCode     string
	ConfirmationPassword string
}
