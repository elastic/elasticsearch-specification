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

format-code:  ## Format the spec according to the style guide
	@echo ">> validating formatting code"
	@npm run format:fix --prefix specification

generate-spec:	  ## Generate the output spec
	@echo ">> generating the spec .."
	@npm run compile:canonical-json
	@npm run compile:ts-validation

check-license:	## Add the license headers to the files
	@echo ">> checking license headers .."
	.github/check-license-headers.sh

contrib: | check-license format-code generate-spec	## Pre contribution target

help:  ## Display help
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
#------------- <https://suva.sh/posts/well-documented-makefiles> --------------

.DEFAULT_GOAL := help
