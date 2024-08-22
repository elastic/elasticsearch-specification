SHELL := /bin/bash

validate: ## Validate a given endpoint request or response
	@node compiler/run-validations.js --api $(api) --type $(type) --branch $(branch)

validate-no-cache: ## Validate a given endpoint request or response without local cache
	@node compiler/run-validations.js --api $(api) --type $(type) --branch $(branch) --no-cache

generate:	  ## Generate the output spec
	@echo ">> generating the spec .."
	@npm run generate-schema --prefix compiler -- --spec ../specification/ --output ../output/
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
	@npm install @stoplight/spectral-cli

clean-dep:	## Clean npm dependencies
	@rm -rf compiler/node_modules
	@rm -rf typescript-generator/node_modules

transform-expand-generics: ## Create a new schema with all generics expanded
	@npm run transform-expand-generics --prefix compiler

transform-to-openapi: ## Generate the OpenAPI definition from the compiled schema
	@npm run transform-to-openapi --prefix compiler

filter-for-serverless: ## Generate the serverless version from the compiled schema
	@npm run --prefix compiler filter-by-availability -- --serverless --visibility=public --input ../output/schema/schema.json --output ../output/schema/schema-serverless.json

dump-routes: ## Create a new schema with all generics expanded
	@npm run dump-routes --prefix compiler

contrib: | generate license-check spec-format-fix transform-to-openapi filter-for-serverless ## Pre contribution target

overlay-docs: ## Apply overlays to OpenAPI documents
	@npx bump overlay "output/openapi/elasticsearch-serverless-openapi.json" "docs/overlays/elasticsearch-serverless-openapi-overlays.yaml" > "output/openapi/elasticsearch-serverless-openapi.tmp.json"
	@npx @redocly/cli bundle output/openapi/elasticsearch-serverless-openapi.tmp.json --ext json -o output/openapi/elasticsearch-serverless-openapi.examples.json
	rm output/openapi/elasticsearch-serverless-openapi.tmp.json

lint-docs: ## Lint the OpenAPI documents
	@npx @stoplight/spectral-cli lint output/openapi/*.json --ruleset .spectral.yaml

lint-docs-serverless: ## Lint only the serverless OpenAPI document
	@npx @stoplight/spectral-cli lint output/openapi/elasticsearch-serverless-openapi.json --ruleset .spectral.yaml

help:  ## Display help
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
#------------- <https://suva.sh/posts/well-documented-makefiles> --------------

.DEFAULT_GOAL := help
