package log

import (
	"github.com/heroku/rollrus"
	log "github.com/sirupsen/logrus"
)

// A Hook to be fired when logging on the logging levels returned from
// `Levels()` on your implementation of the interface. Note that this is not
// fired in a goroutine or a channel with workers, you should handle such
// functionality yourself if your call is non-blocking and you don't wish for
// the logging calls for levels returned from `Levels()` to block.
type Hook interface {
	log.Hook
}

// NopHook is a hook do nothing
type NopHook struct {
}

// Levels return empty levels
func (h NopHook) Levels() []log.Level {
	return nil
}

// Fire do nothing
func (h NopHook) Fire(*log.Entry) error {
	return nil
}

// NewNopHook return NopHook
func NewNopHook() NopHook {
	return NopHook{}
}

// NewRollbarHook return hook to integration with rollbar notification
func NewRollbarHook(token, env string) *rollrus.Hook {
	return rollrus.NewHook(token, env)
}

// AddHook add hook to standard logger
func AddHook(h Hook) {
	logger.AddHook(h)
}
