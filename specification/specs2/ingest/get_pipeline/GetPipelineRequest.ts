@rest_spec_name("ingest.get_pipeline")
class GetPipelineRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
}
