@rest_spec_name("ml.get_filters")
class GetFiltersRequest extends RequestBase {
	@request_parameter()
	from: integer;
	@request_parameter()
	size: integer;
}
