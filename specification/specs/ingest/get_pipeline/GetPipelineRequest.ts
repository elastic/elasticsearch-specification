@rest_spec_name("ingest.get_pipeline")
class GetPipelineRequest extends RequestBase {
  path_parts?: {
    id?: string;
  }
  query_parameters?: {
    master_timeout?: Time;
  }
  body?: {
  }
}
