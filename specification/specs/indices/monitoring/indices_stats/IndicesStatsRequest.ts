@rest_spec_name("indices.stats")
class IndicesStatsRequest extends RequestBase {
	@request_parameter()
	completion_fields: Field[];
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	fielddata_fields: Field[];
	@request_parameter()
	fields: Field[];
	@request_parameter()
	forbid_closed_indices: boolean;
	@request_parameter()
	groups: string[];
	@request_parameter()
	include_segment_file_sizes: boolean;
	@request_parameter()
	include_unloaded_segments: boolean;
	@request_parameter()
	level: Level;
}
