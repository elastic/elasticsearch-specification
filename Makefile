SHELL := /bin/bash

validate: ## Validate a given endpoint request or response
	@node compiler/run-validations.js --api $(api) --type $(type) --stack-version $(stack-version)

validate-no-cache: ## Validate a given endpoint request or response without local cache
	@node compiler/run-validations.js --api $(api) --type $(type) --stack-version $(stack-version) --no-cache

generate:	  ## Generate the output spec
	@echo ">> generating the spec .."
	@npm run generate-schema --prefix compiler
	@npm run start --prefix typescript-generator

compile:	## Compile the specification
	@npm run compile:specification --prefix compiler

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

spec-dangling-types:	## Generate the dangling types rreport
	@npm run generate-dangling --prefix compiler

spec-inspect:  ## Run the command line schema browser tool
	@python3 output/viewer.py output/schema/schema.json

setup:	## Install dependencies for contrib target
	@node compiler/check-node.js
	@make clean-dep
	@npm install --prefix compiler
	@npm install --prefix typescript-generator

clean-dep:	## Clean npm dependencies
	@rm -rf compiler/node_modules
	@rm -rf typescript-generator/node_modules

transform-expand-generics: ## Create a new schema with all generics expanded
	@npm run transform-expand-generics --prefix compiler

contrib: | generate license-check spec-format-fix 	## Pre contribution target

bump:
	@echo ">> bumping..."
	.ci/bump.sh

help:  ## Display help
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
#------------- <https://suva.sh/posts/well-documented-makefiles> --------------

.DEFAULT_GOAL := help
