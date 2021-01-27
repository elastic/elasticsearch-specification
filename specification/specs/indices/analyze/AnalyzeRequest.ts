@rest_spec_name('indices.analyze')
class AnalyzeRequest extends RequestBase {
  path_parts?: {
    index?: IndexName
  }
  query_parameters?: {}
  body?: {
    analyzer?: string
    attributes?: string[]
    char_filter?: Union<string, CharFilter>[]
    explain?: boolean
    field?: Field
    filter?: Union<string, TokenFilter>[]
    normalizer?: string
    text?: TextToAnalyze
    tokenizer?: Union<string, Tokenizer>
  }
}

type TextToAnalyze = string | Array<string>
