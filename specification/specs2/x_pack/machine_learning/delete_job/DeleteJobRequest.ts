@rest_spec_name("xpack.ml.delete_job")
class DeleteJobRequest extends RequestBase {
	@request_parameter()
	force: boolean;
}
