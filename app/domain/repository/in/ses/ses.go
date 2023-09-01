package ses

type SendEmailInput struct {
	Charset      string   // UTF-8
	From         string   // Required
	ToAddresses  []string // Required
	Subject      string   // Required
	Body         string   // HTML
	BccAddresses []string // Optional
	CcAddresses  []string // Optional
}
