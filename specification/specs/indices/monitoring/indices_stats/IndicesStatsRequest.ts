@rest_spec_name("indices.stats")
class IndicesStatsRequest extends RequestBase {
	types: TypeName[];
	@request_parameter()
	completion_fields: Field[];
	@request_parameter()
	fielddata_fields: Field[];
	@request_parameter()
	fields: Field[];
	@request_parameter()
	groups: string[];
	@request_parameter()
	level: Level;
	@request_parameter()
	include_segment_file_sizes: boolean;
}
