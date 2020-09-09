@rest_spec_name("ingest.delete_pipeline")
class DeletePipelineRequest extends RequestBase {
  query_parameters: {
    master_timeout: Time;
    timeout: Time;
  }
  body: {
  }
}
