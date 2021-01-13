@rest_spec_name("ingest.delete_pipeline")
class DeletePipelineRequest extends RequestBase {
  pathParts?: {
    id: string;
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
  }
}
