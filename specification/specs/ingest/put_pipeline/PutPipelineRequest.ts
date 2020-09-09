@rest_spec_name("ingest.put_pipeline")
class PutPipelineRequest extends RequestBase {
  query_parameters: {
    master_timeout: Time;
    timeout: Time;
  }
  body: {
    description: string;
    on_failure: ProcessorContainer[];
    processors: ProcessorContainer[];
  }
}
