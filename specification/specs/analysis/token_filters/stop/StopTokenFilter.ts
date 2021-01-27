class StopTokenFilter extends TokenFilterBase {
  ignore_case?: boolean;
  remove_trailing?: boolean;
  stopwords: StopWords;
  stopwords_path?: string;
}
