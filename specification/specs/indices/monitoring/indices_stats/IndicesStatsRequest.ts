@rest_spec_name("indices.stats")
class IndicesStatsRequest extends RequestBase {
	query_parameters: {
		completion_fields: Field[];
		expand_wildcards: ExpandWildcards;
		fielddata_fields: Field[];
		fields: Field[];
		forbid_closed_indices: boolean;
		groups: string[];
		include_segment_file_sizes: boolean;
		include_unloaded_segments: boolean;
		level: Level;
	}
	body: {
	}
}
