class TokenizerBase {
  type: string;
  version?: string;
}

type Tokenizer = CharGroupTokenizer |
  EdgeNGramTokenizer |
  KeywordTokenizer |
  LetterTokenizer |
  LowercaseTokenizer |
  NGramTokenizer |
  NoriTokenizer |
  PathHierarchyTokenizer |
  StandardTokenizer |
  UaxEmailUrlTokenizer |
  WhitespaceTokenizer
