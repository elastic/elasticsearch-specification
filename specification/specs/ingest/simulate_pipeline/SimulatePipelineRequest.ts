@rest_spec_name("ingest.simulate")
class SimulatePipelineRequest extends RequestBase {
	docs: SimulatePipelineDocument[];
	pipeline: Pipeline;
	@request_parameter()
	verbose: boolean;
}
