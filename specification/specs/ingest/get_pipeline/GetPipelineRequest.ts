@rest_spec_name("ingest.get_pipeline")
class GetPipelineRequest extends RequestBase {
  pathParts?: {
    id?: string;
  }
  query_parameters?: {
    master_timeout?: Time;
  }
  body?: {
  }
}
