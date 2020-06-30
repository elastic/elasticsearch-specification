@rest_spec_name("transform.get_transform")
class GetTransformRequest extends RequestBase {
	query_parameters: {
		allow_no_match: boolean;
		from: integer;
		size: integer;
	}
	body: {
	}
}
