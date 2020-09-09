class TextProperty extends CorePropertyBase {
  analyzer: string;
  boost: double;
  eager_global_ordinals: boolean;
  fielddata: boolean;
  fielddata_frequency_filter: FielddataFrequencyFilter;
  index: boolean;
  index_options: IndexOptions;
  index_phrases: boolean;
  index_prefixes: TextIndexPrefixes;
  norms: boolean;
  position_increment_gap: integer;
  search_analyzer: string;
  search_quote_analyzer: string;
  term_vector: TermVectorOption;
}
