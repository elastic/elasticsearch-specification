@rest_spec_name("transform.delete_transform")
class DeleteTransformRequest extends RequestBase {
	@request_parameter()
	force: boolean;
}
