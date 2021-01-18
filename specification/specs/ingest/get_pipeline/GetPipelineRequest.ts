@rest_spec_name("ingest.get_pipeline")
class GetPipelineRequest extends RequestBase {
  path_parts?: {
    id?: Id;
  }
  query_parameters?: {
    master_timeout?: Time;
  }
  body?: {
  }
}
