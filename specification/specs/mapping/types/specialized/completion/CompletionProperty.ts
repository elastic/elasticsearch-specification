class CompletionProperty extends DocValuesPropertyBase {
  analyzer: string;
  contexts: SuggestContext[];
  max_input_length: integer;
  preserve_position_increments: boolean;
  preserve_separators: boolean;
  search_analyzer: string;
}
