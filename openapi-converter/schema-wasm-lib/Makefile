REQUIRED_BINS := wasm-pack
$(foreach bin,$(REQUIRED_BINS),\
    $(if $(shell command -v $(bin) 2> /dev/null),,$(error Please install `$(bin)`)))

.PHONY: pkg

pkg:
	wasm-pack build --release -t nodejs
	rm pkg/.gitignore
