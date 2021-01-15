@rest_spec_name("ingest.delete_pipeline")
class DeletePipelineRequest extends RequestBase {
  path_parts?: {
    id: Id;
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
  }
}
