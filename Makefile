SHELL := /bin/bash

validate: lint ## Validate a given endpoint request or response
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
	@npm install --prefix validator
	@npm install --prefix specification
	@npm install @redocly/cli bump-cli
	@npm install --prefix docs/examples

clean-dep:	## Clean npm dependencies
	@rm -rf compiler/node_modules
	@rm -rf typescript-generator/node_modules

transform-expand-generics: ## Create a new schema with all generics expanded
	@npm run transform-expand-generics --prefix compiler

transform-to-openapi: ## Generate the OpenAPI definition from the compiled schema
	@npm run transform-to-openapi -- --schema output/schema/schema.json --flavor stack --output output/openapi/elasticsearch-openapi.json
	@npm run transform-to-openapi -- --schema output/schema/schema.json --flavor serverless --output output/openapi/elasticsearch-serverless-openapi.json

transform-to-openapi-for-docs: ## Generate the OpenAPI definition tailored for API docs generation
	@make generate-language-examples
	@make generate
	@npm run transform-to-openapi -- --schema output/schema/schema.json --flavor stack --lift-enum-descriptions --include-language-examples --output output/openapi/elasticsearch-openapi-docs.json
	@npm run transform-to-openapi -- --schema output/schema/schema.json --flavor serverless --lift-enum-descriptions --include-language-examples --output output/openapi/elasticsearch-serverless-openapi-docs.json

filter-for-serverless: ## Generate the serverless version from the compiled schema
	@npm run --prefix compiler filter-by-availability -- --serverless --visibility=public --input ../output/schema/schema.json --output ../output/output/openapi/elasticsearch-serverless-openapi.json

dump-routes: ## Create a new schema with all generics expanded
	@npm run dump-routes --prefix compiler

overlay-docs: ## Apply overlays to OpenAPI documents
	@npx bump overlay "output/openapi/elasticsearch-serverless-openapi-docs.json" "docs/overlays/elasticsearch-serverless-openapi-overlays.yaml" > "output/openapi/elasticsearch-serverless-openapi-docs.tmp1.json"
	@npx bump overlay "output/openapi/elasticsearch-serverless-openapi-docs.tmp1.json" "docs/overlays/elasticsearch-shared-overlays.yaml" > "output/openapi/elasticsearch-serverless-openapi-docs.tmp2.json"
	@npx @redocly/cli bundle output/openapi/elasticsearch-serverless-openapi-docs.tmp2.json --ext json -o output/openapi/elasticsearch-serverless-openapi-docs-final.json
	@npx bump overlay "output/openapi/elasticsearch-openapi-docs.json" "docs/overlays/elasticsearch-openapi-overlays.yaml" > "output/openapi/elasticsearch-openapi-docs.tmp1.json"
	@npx bump overlay "output/openapi/elasticsearch-openapi-docs.tmp1.json" "docs/overlays/elasticsearch-shared-overlays.yaml" > "output/openapi/elasticsearch-openapi-docs.tmp2.json"
	@npx @redocly/cli bundle output/openapi/elasticsearch-openapi-docs.tmp2.json --ext json -o output/openapi/elasticsearch-openapi-docs-final.json
	rm output/openapi/elasticsearch-serverless-openapi-docs.tmp*.json
	rm output/openapi/elasticsearch-openapi-docs.tmp*.json

generate-language-examples:
	@npm update --prefix docs/examples @elastic/request-converter
	@node docs/examples/generate-language-examples.js
	@npm run format:fix-examples --prefix compiler

generate-language-examples-with-java:
	@node docs/examples/generate-language-examples.js java
	@npm run format:fix-examples --prefix compiler

lint:
	@npm run lint --prefix specification

lint-docs: ## Lint the OpenAPI documents after overlays
	@npx @redocly/cli lint "output/openapi/elasticsearch-*.json" --config "docs/linters/redocly.yaml" --format stylish --max-problems 500

lint-docs-stateful: ## Lint only the elasticsearch-openapi-docs-final.json file
	@npx @redocly/cli lint "output/openapi/elasticsearch-openapi-docs-final.json" --config "docs/linters/redocly.yaml" --format stylish --max-problems 500

lint-docs-serverless: ## Lint only the serverless OpenAPI document after overlays
	@npx @redocly/cli lint "output/openapi/elasticsearch-serverless-openapi-docs-final.json" --config "docs/linters/redocly.yaml" --format stylish --max-problems 500

contrib: | lint generate license-check spec-format-fix transform-to-openapi filter-for-serverless lint-docs ## Pre contribution target

help:  ## Display help
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
#------------- <https://suva.sh/posts/well-documented-makefiles> --------------

.DEFAULT_GOAL := help
