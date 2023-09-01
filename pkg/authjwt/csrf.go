package authjwt

import (
	"crypto/rand"
	"fmt"
)

const (
	csrfTokenLength = 32
)

// GenerateCSRFToken generates csrf token with random string
func GenerateCSRFToken() (string, error) {
	b := make([]byte, csrfTokenLength)
	if _, err := rand.Read(b); err != nil {
		return "", fmt.Errorf("failed to generate token: %w", err)
	}

	return fmt.Sprintf("%x", b), nil
}
