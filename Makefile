# Copyright © 2022 IOTIC LABS LTD. info@iotics.com
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://github.com/Iotic-Labs/iotics-grpc-client-ts/blob/main/LICENSE
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
BUF_VERSION:=1.6.0
PROTOC_VERSION:=3.17.3

GOPATH=$(shell go env GOPATH)
export GOBIN=$(GOPATH)/bin
export PATH:=$(PATH):$(GOBIN)
BUF = $(GOBIN)/buf
PROTOC = $(GOBIN)/protoc
UNAME_S := $(shell uname -s)
ifeq ($(UNAME_S), Darwin)
    PROTOC_ARCHIVE="protoc-$(PROTOC_VERSION)-osx-x86_64.zip"
else
    PROTOC_ARCHIVE="protoc-$(PROTOC_VERSION)-$(UNAME_S)-$(shell uname -m).zip"
endif
BUF_URL = "https://github.com/bufbuild/buf/releases/download/v$(BUF_VERSION)/buf-$(shell uname -s)-$(shell uname -m)"
PROTOC_URL = "https://github.com/protocolbuffers/protobuf/releases/download/v$(PROTOC_VERSION)/$(PROTOC_ARCHIVE)"


########################
## High level targets ##
########################

build: deps-proto deps-go deps-buf lint deps-node generate dist

clean:
	rm -rf buf.lock dist node_modules src/client yarn.lock

dist dist-update:
	yarn build

generate: src/client
generate-update src/client:
	$(BUF) generate --include-imports $(GEN_ARGS)

lint:
	$(BUF) lint

list:
	$(BUF) ls-files

publish:
	yarn publish --access public


#######################
## Low level targets ##
#######################

deps-proto:
	git submodule update --init --recursive

deps-proto-update:
	git submodule foreach git pull origin main

deps-go: $(GOBIN)/buf $(GOBIN)/protoc
$(GOBIN)/buf $(GOBIN)/protoc:
	curl -sSL $(BUF_URL) -o $(GOBIN)/buf && chmod +x $(GOBIN)/buf
	curl -OL  $(PROTOC_URL) && \
		unzip -p $(PROTOC_ARCHIVE) bin/protoc > $(GOBIN)/protoc && chmod +x $(GOBIN)/protoc && \
		rm $(PROTOC_ARCHIVE)

deps-go-update:
ifneq ("$(shell ! test -e $(BUF) || $(BUF) --version 2>&1)", "$(BUF_VERSION)")
	curl -sSL $(BUF_URL) -o $(GOBIN)/buf && chmod +x $(GOBIN)/buf
endif
ifneq ("$(shell ! test -e $(PROTOC) || $(PROTOC) --version 2>&1)", "libprotoc $(PROTOC_VERSION)")
	curl -OL  $(PROTOC_URL) && \
		unzip -p $(PROTOC_ARCHIVE) bin/protoc > $(GOBIN)/protoc && chmod +x $(GOBIN)/protoc && \
		rm $(PROTOC_ARCHIVE)
endif

deps-node: node_modules
deps-node-update node_modules:
	yarn install && cd examples && yarn install

deps-buf: buf.lock
deps-buf-update buf.lock:
	$(BUF) mod update
