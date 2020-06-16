@rest_spec_name("transform.get_transform")
class GetTransformRequest extends RequestBase {
	@request_parameter()
	allow_no_match: boolean;
	@request_parameter()
	from: integer;
	@request_parameter()
	size: integer;
}
