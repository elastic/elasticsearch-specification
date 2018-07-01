class HighlightField {
	field: Field;
	pre_tags: string[];
	post_tags: string[];
	fragment_size: integer;
	no_match_size: integer;
	number_of_fragments: integer;
	fragment_offset: integer;
	boundary_max_scan: integer;
	order: HighlighterOrder;
	tags_schema: HighlighterTagsSchema;
	require_field_match: boolean;
	boundary_chars: string;
	max_fragment_length: integer;
	boundary_scanner: BoundaryScanner;
	boundary_scanner_locale: string;
	fragmenter: HighlighterFragmenter;
	type: Union<HighlighterType, string>;
	force_source: boolean;
	matched_fields: Field[];
	highlight_query: QueryContainer;
	phrase_limit: integer;
}
