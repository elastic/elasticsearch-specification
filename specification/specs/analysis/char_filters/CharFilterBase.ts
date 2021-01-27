class CharFilterBase {
  type: string;
  version?: string;
}

type CharFilter = HtmlStripCharFilter |
  MappingCharFilter |
  PatternReplaceTokenFilter
