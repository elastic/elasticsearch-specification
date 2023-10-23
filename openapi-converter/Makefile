REQUIRED_BINS := wasm-pack cargo
$(foreach bin,$(REQUIRED_BINS),\
    $(if $(shell command -v $(bin) 2> /dev/null),,$(error Please install `$(bin)`)))

.PHONY: schema-wasm-lib

schema-wasm-lib:
	wasm-pack build --release -t nodejs schema-wasm-lib
	# we do commit the result in git
	rm schema-wasm-lib/pkg/.gitignore
