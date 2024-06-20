REQUIRED_BINS := wasm-pack cargo
$(foreach bin,$(REQUIRED_BINS),\
    $(if $(shell command -v $(bin) 2> /dev/null),,$(error Please install `$(bin)`)))

.PHONY: compiler-wasm-lib

compiler-wasm-lib: ## Compile the WASM library
	wasm-pack build --release -t nodejs compiler-wasm-lib
	# we do commit the result in git
	rm compiler-wasm-lib/pkg/.gitignore


help:  ## Display help
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
#------------- <https://suva.sh/posts/well-documented-makefiles> --------------

.DEFAULT_GOAL := help
