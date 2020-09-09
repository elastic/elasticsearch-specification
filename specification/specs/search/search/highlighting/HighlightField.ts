class HighlightField {
  boundary_chars: string;
  boundary_max_scan: integer;
  boundary_scanner: BoundaryScanner;
  boundary_scanner_locale: string;
  field: Field;
  force_source: boolean;
  fragmenter: HighlighterFragmenter;
  fragment_offset: integer;
  fragment_size: integer;
  highlight_query: QueryContainer;
  matched_fields: Field[];
  max_fragment_length: integer;
  no_match_size: integer;
  number_of_fragments: integer;
  order: HighlighterOrder;
  phrase_limit: integer;
  post_tags: string[];
  pre_tags: string[];
  require_field_match: boolean;
  tags_schema: HighlighterTagsSchema;
  type: Union<HighlighterType, string>;
}
