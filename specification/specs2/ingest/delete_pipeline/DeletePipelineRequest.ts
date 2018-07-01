@rest_spec_name("ingest.delete_pipeline")
class DeletePipelineRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
