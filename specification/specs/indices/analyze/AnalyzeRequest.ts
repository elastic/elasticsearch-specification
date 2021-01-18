@rest_spec_name("indices.analyze")
class AnalyzeRequest extends RequestBase {
  path_parts?: {
    index?: IndexName;
  }
  query_parameters?: {
  }
  body?: {
    analyzer?: string;
    attributes?: string[];
    char_filter?: Union<string, CharFilterBase>[];
    explain?: boolean;
    field?: Field;
    filter?: Union<string, TokenFilterBase>[];
    normalizer?: string;
    text?: string | Array<string>;
    tokenizer?: Union<string, TokenizerBase>;
  }
}
