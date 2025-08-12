# Documenting the API specification

A specification is not only about formalizing data structures, it's also about explaining what these structures and their properties are used for.

Documentation of the TypeScript specification is made using [JSDoc](https://jsdoc.app/) comments, i.e. multiline comments starting with `/**` above a type or field declaration.

The first phrase is used as the mandatory operation summary in the OpenAPI document.
Refer to the [API docs contribution guidelines](https://www.elastic.co/docs/extend/contribute/api-docs/guidelines) to learn more about how to create great documentation for your API.

> [!NOTE] 
> You must add a period at the end of the phrase for it to parse correctly. The period will be properly omitted from the output OpenAPI document.

Additional lines start with a `*` followed by a space. Long lines are allowed but it's better if text is formatted to a maximum of 120 characters per line.

> [!NOTE] 
> A blank line must be inserted between the first sentence and all subsequent lines to ensure correct formatting in all places (e.g. in the in-code documentation of the language clients).

## Example

```ts
/**
 * Get ranking evaluation.
 *
 * Enables you to evaluate the quality of ranked search results over a set of typical search queries.
 * @rest_spec_name rank_eval
 * @availability stack since=6.2.0 stability=stable
 * @index_privileges read
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and index aliases used to limit the request. Wildcard (`*`) expressions are supported.
     * To target all data streams and indices in a cluster, omit this parameter or use `_all` or `*`.
     */
    index: Indices
  }
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices. This behavior applies even if the request targets other open indices. For example, a request targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
     * @server_default true
     */
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, missing or closed indices are not included in the response.
     * @server_default false
     */
    ignore_unavailable?: boolean
    search_type?: string
  }
  body: {
    /** A set of typical search requests, together with their provided ratings. */
    requests: RankEvalRequestItem[]
    /**
     * Definition of the evaluation metric to calculate.
     */
    metric?: RankEvalMetric
  }
}
```

([original source code](https://github.com/elastic/elasticsearch-specification/blob/main/specification/_global/rank_eval/RankEvalRequest.ts))

For more information about the tags in this example (and other common tags such
as `@deprecated` and `@ext_doc_id`), refer to the [Modeling Guide](https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#additional-information).

## Markup language

The specification is the starting point for a number of generators that produce a large range of artifacts, starting with source code in 10 different programming languages. It's essential for the API documentation to be part of these generated artifacts, e.g. to provide autocompletion help in IDEs when using a client library.

Each of these targets has a different way to format inline documentation: Java code uses HTML, Python uses reStructuredText, Rust uses Markdown, etc. To enable rich documentation to be output, the specification doc comments must not be just plain text, but use a well-defined markup language so that generators can reliably transcode them to their target representation.

**We have settled on using [GitHub Flavored Markdown](https://github.github.com/gfm/) (GFM) for doc comments.** It is based on the well-defined [CommonMark](https://commonmark.org/) specification with a few additions, most notably tables.

GFM also has implementations in most languages, meaning that code generators will be able to easily parse the doc comments and transcode them.

## Structuring a doc-comment

For guidelines of how to write great doc-comments, refer to the [Contribute to API docs](https://www.elastic.co/docs/extend/contribute/api-docs/guidelines#write-descriptions) page.

### Terseness

**Doc comments are reference material**: they should be as succinct as possible while capturing all the necessary information to use the elements they're documenting. Remember that they will often show up in small IDE autocompletion popups!

In particular, doc comments are not the right place for tutorials or extended examples, which should be in dedicated documentation pages. To reduce the risk of broken links, use `@ext_doc_id` to implement a link to additional documentation. 

API endpoints can also have `@doc_id` or `@doc_url` JSDoc tags that enable clients to link to the API docs, for example.

### Multi-paragraph doc comments

A single sentence is not always enough to explain a type or a field and doc comments will have multiple paragraphs. It is important that **the first paragraph provides a self-contained description** of the item that is being documented. The reason is twofold:
- people skim documentation quickly and should get the gist of the information from that first sentence, and read others if they want to dive in,
- Some IDEs may choose to display only the first paragraph or even the first sentence of a doc-comment in their help popup to keep it small, and then require an additional action from the user to display the full text.
