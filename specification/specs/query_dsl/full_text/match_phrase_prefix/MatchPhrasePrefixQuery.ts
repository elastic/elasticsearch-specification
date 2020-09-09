@class_serializer("FieldNameQueryFormatter`2")
class MatchPhrasePrefixQuery extends QueryBase {
  analyzer: string;
  max_expansions: integer;
  query: string;
  slop: integer;
  zero_terms_query: ZeroTermsQuery;
}
