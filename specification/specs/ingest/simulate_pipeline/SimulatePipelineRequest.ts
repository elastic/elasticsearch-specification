@rest_spec_name("ingest.simulate")
class SimulatePipelineRequest extends RequestBase {
	pipeline: Pipeline;
	docs: SimulatePipelineDocument[];
	@request_parameter()
	verbose: boolean;
}
