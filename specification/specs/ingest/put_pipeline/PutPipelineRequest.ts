@rest_spec_name("ingest.put_pipeline")
class PutPipelineRequest extends RequestBase {
	description: string;
	processors: Processor[];
	on_failure: Processor[];
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
