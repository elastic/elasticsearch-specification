@rest_spec_name("transform.get_transform_stats")
class GetTransformStatsRequest extends RequestBase {
	@request_parameter()
	allow_no_match: boolean;
	@request_parameter()
	from: long;
	@request_parameter()
	size: long;
}
