class TermsAggregation {
  collect_mode?: TermsAggregationCollectMode
  exclude?: string | string[]
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  include?: string | string[] | TermsInclude
  min_doc_count?: integer
  missing?: Missing
  value_type?: string
  order?: Dictionary<string, SortOrder>
  script?: Script
  shard_size?: integer
  show_term_doc_count_error?: boolean
  size?: integer
}
