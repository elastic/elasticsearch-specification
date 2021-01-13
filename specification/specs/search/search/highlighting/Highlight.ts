class Highlight {
  fields: Dictionary<Field, HighlightField>;

  type?: HighlighterType;
  boundary_chars?: string;
  boundary_max_scan?: integer;
  boundary_scanner?: BoundaryScanner;
  boundary_scanner_locale?: string;
  encoder?: HighlighterEncoder;
  fragmenter?: HighlighterFragmenter;
  fragment_offset?: integer;
  fragment_size?: integer;
  max_fragment_length?: integer;
  no_match_size?: integer;
  number_of_fragments?: integer;
  order?: HighlighterOrder;
  post_tags?: string[];
  pre_tags?: string[];
  require_field_match?: boolean;
  tags_schema?: HighlighterTagsSchema;
}
