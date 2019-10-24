@rest_spec_name("ingest.simulate")
class SimulatePipelineRequest extends RequestBase {
	documents: SimulatePipelineDocument[];
	pipeline: Pipeline;
	@request_parameter()
	verbose: boolean;
}
