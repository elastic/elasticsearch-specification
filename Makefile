SHELL := /bin/bash

validation-all:  ## Run Validation on all Endpoints
	@echo ">> running validations for all endpoints .."
	./run-validations.sh

validation-all-fresh:  ## Run Validation on all Endpoints with a fresh setup
	@echo ">> running validations for all endpoints .."
	PULL_LATEST=true ./run-validations.sh

validation-api:  ## Validate Endpoint with param: api=<api-name>
	@echo ">> validating request and response of Endpoint: $(api)"
	./run-validations.sh --api $(api)

validation-api-request:  ## Validate request of Endpoint with param: api=<api-name>
	@echo ">> validating request of Endpoint: $(api)"
	./run-validations.sh --api $(api) --request

validation-api-response:  ## Validate response of Endpoint with param: api=<api-name>
	@echo ">> validating response of Endpoint: $(api)"
	./run-validations.sh --api $(api) --response

license-check:	## Add the license headers to the files
	@echo ">> checking license headers .."
	.github/check-license-headers.sh

license-add:	## Add the license headers to the files
	@echo ">> adding license headers .."
	.github/add-license-headers.sh

spec-format-check:	## Check specification formatting rules
	@npm run format:check --prefix compiler

spec-format-fix:	## Format/fix the specification according to the formatting rules
	@npm run format:fix --prefix compiler

spec-generate:	  ## Generate the output spec
	@echo ">> generating the spec .."
	@npm run generate-schema --prefix compiler
	@npm run start --prefix typescript-generator

spec-compile:	## Compile the specification
	@npm run compile:specification --prefix compiler

spec-imports-fix:	## Fix the TypeScript imports
	@npm run imports:fix --prefix compiler -- --rebuild

contrib-install:	## make sure NPM install runs so that the contrib targets tooling is available
	@npm install --prefix compiler

contrib: | spec-generate license-add spec-format-fix 	## Pre contribution target

help:  ## Display help
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
#------------- <https://suva.sh/posts/well-documented-makefiles> --------------

.DEFAULT_GOAL := help
