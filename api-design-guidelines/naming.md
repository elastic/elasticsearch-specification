# API guidelines - Naming

Names are everywhere when designing an API. This section applies to:

- Endpoint namespaces
- Endpoint names
- Path and query parameter names
- Properties in a JSON object that aren't user defined or generated (like IDs)
- Enum values

## Use basic characters for names

Names should only consist of the following characters:

- Basic Latin letters: `A-Z` and `a-z`
- Arabic numerals: `0-9`
- Underscores: `_`

Additionally the first character of a name should not be numeric.

- DO: `name`
- DONT: `1name`

In general lowercase letters should be favored over uppercase letters in names. An example of when uppercase characters should be used is when there's disambiguation required between two different casings (such as (`M`)onth versus (`m`)inute).

## Use underscores for readability

Words within a name should be separated by an underscore. Phrases that are hyphenated will usually be combined into a single string of characters without an underscore between them. Favor readability over strict adherence to rules. Names and phrases that already have a representation in use within the Elasticsearch API should be used as they are for consistency.

In the below examples the phrase being transformed into a name for the API is "searchable snapshot":

- DO: `searchable_snapshot`
- DON'T: `search_able_snapshot` (even if it were "search-able snapshot" this isn't correct)
- DON'T: `searchablesnapshot`
- DON'T: `searchable_snap_shot` ("snapshot" is one word)

## Avoid reserved words when choosing names

Care should be given when naming to avoid using keywords that are reserved in common programming languages. While some automation does exist to protect against this in some situations, it is not foolproof. Therefore API designers should carry out due diligence on this matter before committing to particular naming.

The primary languages officially supported by Elastic are C#, Go, Java, JavaScript, PHP, Python, and Ruby. More information on which languages use which keywords can be [found here](https://nige.tech/keywords.html).

## Name uniqueness

Leading and trailing underscores and casing shouldn't be taken into account when considering the uniqueness of names within the same context. For example, the following names should all be considered equivalent in terms of uniqueness:

- `nodes`
- `Nodes`
- `_nodes`
- `__nodes`
- `__NODES__`

Some programming languages place special meaning on underscore prefixes and suffixes. Casing rules and conventions are not flexible across languages in general. Prefer instead to use completely separate names and terms for distinct cases.

See the below example with a JSON object with two properties `nodes` and `_nodes`:

```yaml
{
  "nodes": {...},
  "_nodes": {...}
}
```

For this API the generated structure in some programming languages would have a clash between the names of the two properties which would require inventing a name for one of the properties. Diversions from the API as it is on the wire are likely to cause confusion for users and should be avoided if possible. Instead these properties could be named more semantically as follows:

```yaml
{
  "nodes": {...},
  "node_info": {...}
}
```

## Nesting and dots

Dots are permitted as separators when nesting, but these should not be considered part of the name itself. Instead dotted keys should be considered an alternate method of specifying nested structures across multiple names. The two below are equivalent:

- `{"index.settings.number_of_shards": 1}`
- `{"index": {"settings": {"number_of_shards": 1}}`

If an API supports specifying a structure with dotted notation that API must also allow specifying the same structure via nested objects. Language clients do not generate APIs and structures for dotted notation, they only support the nested object notation.

The rules for dotted keys only apply to API-specified structures. Dots are allowed within a "name" when the name is user-specified, such as a field name, without requiring nesting rules in every part of the API using fields.

## Naming endpoints

Endpoint names and namespaces should only use lowercase Latin letters and underscores. Ideally endpoint names combined with their namespace (if any) should be visually mappable to the corresponding HTTP request method and path.

- `search` -> `POST /_search` and `POST /<index>/_search`
- `cluster.health` -> `GET /_cluster/health`
- `ccr.get_auto_follow_pattern` -> `GET /_ccr/auto_follow/<name>`

### Choosing the right endpoint namespace

Namespaces are useful to separate and contain related pieces of functionality. They are an abstraction that allows users to organize and locate parts of the product surface and reduce mental overhead.

As such, there is no requirement for the organization of the product surface to reflect the structure of the underlying implementation. A module of code may expose APIs over multiple namespaces. Conversely, multiple modules may collaborate within the same namespace.

Care should be given to ensure that:

- All member APIs of a given namespace are logically related and form a coherent set.
- Related functionality is not distributed across multiple arbitrary namespaces

NOTE: The endpoint namespaces are used to generate tags in the OpenAPI documents. The tags are ultimately used to group the endpoints in the API documentation. To override the default tag, use `@doc_tag`.

### Use the global namespace sparingly

The top-level global namespace should be treated with particular care. It is traditionally reserved for search and document endpoints only. A case should be made and a broader discussion carried out before new endpoints unrelated to these functions are added to the global namespace.

## Use consistent naming conventions for endpoints

Certain endpoint name prefixes have established meaning by convention. For consistency these should be maintained for all new endpoints:

| Prefix    | Meaning                                                         |
|-----------|-----------------------------------------------------------------|
| `get_`    | CRUD read                                                       |
| `put_`    | Create or replace                                               |
| `update_` | CRUD or patch update                                            |
| `delete_` | CRUD delete                                                     |
| `create_` | CRUD create                                                     |
| `search_` | Ask an index for a set of documents that match given criteria   |
| `query_`  | Higher-level search abstraction which protects internal indices |

The following parameters are conventionally used for pagination:

| Prefix | Meaning                                                             |
|--------|---------------------------------------------------------------------|
| `from` | The offset into the list of objects to start adding to the response |
| `size` | The maximum number of objects to include in the response            |

## Choosing the request path

Every endpoint must have a request path that uniquely identifies the endpoint from other endpoints. A request path is made up of zero or more path segments delimited by a forward slash character (`/`). Path segments will either be a set value (like `_search`) or will be a dynamic segment which are referred to as "path parameters" where a value can be supplied to target specific resources on the server.

If the endpoint belongs to a namespace (e.g. `async_search.submit` belongs to the `async_search` namespace) then the endpoint must have it's first path segment be the namespace prefixed with an underscore:

- `async_search` namespace → `/_async_search/` path prefix

Path segments should only have an underscore prefix in the following conditions:

- The first or "root" path segment in a endpoint with a namespace.
- The path shares a prefix with an existing endpoint that at the same path segment index has a path parameter.

Underscores should be avoided if the above conditions aren't met to avoid adding underscores to path segments when they aren't necessary.

To avoid causing future cases of the second condition, path segments that are a path parameter should always be preceded by a path segment that describes the resource being identified. This advice applies to child resource identifiers too.

- DO: `/_ilm/policy/<policy_name>`
- DON'T: `/_ilm/<policy_name>`
- DON'T: `/_ilm/_policy/<policy_name>`

- DO: `/_snapshot/<repository>/snapshot/<snapshot>`
- DON'T: `/_snapshot/<repository>/<snapshot>`
- DON'T: `/_snapshot/<repository>/_snapshot/<snapshot>`

Model names within the path should be in singular form, not pluralized, even when the endpoint is capable of returning more than one of the model.

- DO: `/_ingest/pipeline`
- DON'T: `/_ingest/pipelines`

If a path prefix has a path parameter to request a given resource (like an ID or name) and includes an option to request "all" of a resource, instead of omitting the path parameter from the path for the "all" case the path parameter should be required to be set to "`*`" or a wildcard pattern ("`*foo`") to keep the number of path segments consistent:

- DO: `/_searchable_snapshots/<id>/cache/stats`
- DO: `/_searchable_snapshots/*/cache/stats`
- DON'T: `/_searchable_snapshots/cache/stats`
