@rest_spec_name("ingest.simulate")
class SimulatePipelineRequest extends RequestBase {
	query_parameters: {
		verbose: boolean;
	}
	body: {
		docs: SimulatePipelineDocument[];
		pipeline: Pipeline;
	}
}
