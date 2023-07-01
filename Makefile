.PHONY: build

SRC_PATH:= ${PWD}

# ----- Setup Development Tools -----
prepare: migrate-tool
	@cd fe/ && npm install

GO_MOD_ENV=GOPRIVATE=github.com/knailk/*
be-mod:
	@$(GO_MOD_ENV) go mod tidy && go mod vendor

# ----- Development -----
be-local:
	@bash -c "go run main.go"
fe-local:
	@bash -c "cd fe && npm start"
game-local:
	@bash -c "cd game"
run:
	make be-local & make fe-local & make game-local
