class MultiMatchQuery extends QueryBase {
  analyzer: string;
  auto_generate_synonyms_phrase_query: boolean;
  cutoff_frequency: double;
  fields: Field[];
  fuzziness: Fuzziness;
  fuzzy_rewrite: MultiTermQueryRewrite;
  fuzzy_transpositions: boolean;
  lenient: boolean;
  max_expansions: integer;
  minimum_should_match: MinimumShouldMatch;
  operator: Operator;
  prefix_length: integer;
  query: string;
  slop: integer;
  tie_breaker: double;
  type: TextQueryType;
  use_dis_max: boolean;
  zero_terms_query: ZeroTermsQuery;
}
