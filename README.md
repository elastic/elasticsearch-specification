# NOTE :exclamation:

Research only, nothing concrete exists here currently. Not likely to take PR's until this get's to be `10%` useful.

# barebones example

This references `specification` locally so you need to cd in to that directory and install its modules once

```bash
$ npm install
```
then build
```bash
$ npm start
```

then from the `barebones-example` you can try the `specification` module locally using

```bash
$ npm install
$ nodejs index
```

# Assets

1) NEST library
2) TypeLite fork by russcam - https://github.com/russcam/typelite/tree/feature/hacks
3) REST API Specs - https://github.com/elastic/elasticsearch/tree/master/rest-api-spec
4) This repo

# Proposed Development plan

1) Create an API downloader (as per NEST code generation) to download latest 6.x REST API specifications
2) Convert REST API specifications to intermediate Typescript format
3) Create reflection tool to augment intermediate Typescript format with Request Information/Type metadata from NEST 6.x (master)
4) Augment Typescript model with known response code information and error models from NEST (master)
4.5) SOCIALISE and raise awareness - gain buy in from other areas
5) Create a code generator to enumerate Typescript model and 
	i) replace existing NEST code generation routine using new Typescript model
	ii) generate new code generation routine for high level NEST client
	iii) generate Java server-side code for Elasticsearch
	iv) generate Java high level client for Elasticsearch
	v) generate Swagger/RAML
6) Migrate existing Elasticsearch APIs to a standards-based format (e.g. RAML)

## Considerations

1) The generation of the Typescript model will need to be a continually run as it is anticipated that this development endeavour will take some time.
2) Socialisation at 4.5 should happen as soon as possible and ideally around at Stage 3.
3) It will be easier to reflect over the NEST client in Stage 3 as opposed to parsing the Java server code as the NEST client contains richer type information.
