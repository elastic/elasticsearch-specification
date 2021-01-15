@rest_spec_name("ingest.simulate")
class SimulatePipelineRequest extends RequestBase {
  path_parts?: {
    id?: Id;
  }
  query_parameters?: {
    verbose?: boolean;
  }
  body?: {
    docs?: SimulatePipelineDocument[];
    pipeline?: Pipeline;
  }
}
