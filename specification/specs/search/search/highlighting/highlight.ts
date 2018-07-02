class Highlight {
	pre_tags: string[];
	post_tags: string[];
	fragment_size: integer;
	no_match_size: integer;
	number_of_fragments: integer;
	fragment_offset: integer;
	boundary_max_scan: integer;
	encoder: HighlighterEncoder;
	order: HighlighterOrder;
	tags_schema: HighlighterTagsSchema;
	fields: Dictionary<Field, HighlightField>[];
	require_field_match: boolean;
	boundary_chars: string;
	max_fragment_length: integer;
	boundary_scanner: BoundaryScanner;
	boundary_scanner_locale: string;
	fragmenter: HighlighterFragmenter;
}
