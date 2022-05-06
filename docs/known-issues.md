# Known issues

Following a list of known issues with the compiler and the specification.
[Here](https://github.com/elastic/elasticsearch-specification/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Abug)
you can find all the currently open bugs.
Do you have a solution in mind? PR are welcome!

## Required fields which presence is mutually exclusive

Some APIs have two or more fields that are mutually required but mutually exclusive,
meaning that at least one, and no more than one, should be there.
An example of this situation happens with the [`transform.put_transform`](https://www.elastic.co/guide/en/elasticsearch/reference/current/put-transform.html) API.

#### Current solution

We don't have a way to represent this yet, the current solution is to
mark all of this fields as optional and document how the API should be used.

## Response structure that changes based on the request

Some APIs will provide a different response structure based on which parameters have
been configured in the request. An example is every API that takes the `wait_for_completion`
parameter cna have this situation. If you configure it to `false`, instead of getting
the usual structure, you will only get a `task` back.

#### Current solution

We don't have a way to represent this yet, the current solution is to
mark every field of the response as optional.

## The automatic backport won't work if the pull request has been opened from a fork

There is nothing that can be done here, it's a security limitation imposed by GitHub.

#### Current solution

Either perform a cherry-pick once merged or create a branch directly in this repository.
Nit: if you do the latter, name the branch like this: `{username}/{feature_name}`

## Boolean in specific enum shouldn't be sent as string

[DynamicMapping](../specification/_types/mapping/dynamic-template.ts#L37-L42) enum if not populated as a boolean in Elasticsearch breaks Kibana which expects a true json boolean.

[elasticsearch-java #139](https://github.com/elastic/elasticsearch-java/issues/139)

#### Current solution

Handle the enum `true` and `false` to be serialized as booleans and not string. These enums have an `es_quirk` annotation.
