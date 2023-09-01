package authjwt

// AuthClaims the claim for authentication
type AuthClaims struct {
	UID      string `json:"uid,omitempty"`
	UserID   string `json:"user_id,omitempty"`
}
