class CompoundWordTokenFilterBase extends TokenFilterBase {
  hyphenation_patterns_path: string
  max_subword_size: integer
  min_subword_size: integer
  min_word_size: integer
  only_longest_match: boolean
  word_list: string[]
  word_list_path: string
}
