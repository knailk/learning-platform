package authjwt

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_GenerateCSRFToken(t *testing.T) {
	t.Run("Token length check", func(t *testing.T) {
		csrf, err := GenerateCSRFToken()
		assert.Nil(t, err, "Expect no error")
		// Token is in hex form
		assert.Equal(t, csrfTokenLength*2, len(csrf), "Unexpected CSRF token length")
	})

	t.Run("Tokens must differ from each other", func(t *testing.T) {
		csrf1, _ := GenerateCSRFToken()
		csrf2, _ := GenerateCSRFToken()
		assert.NotEqual(t, csrf1, csrf2, "2 CSRF tokens are the same")
	})
}
