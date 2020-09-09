class RareTermsAggregation {
  exclude: string | string[];
  field: Field;
  include: string | string[] | TermsInclude;
  max_doc_count: long;
  missing: Missing;
  precision: double;
  value_type: string;
}
