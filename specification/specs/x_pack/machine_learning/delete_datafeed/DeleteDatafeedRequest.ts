@rest_spec_name("ml.delete_datafeed")
class DeleteDatafeedRequest extends RequestBase {
  pathParts?: {
    datafeed_id: string;
  }
  query_parameters?: {
    force?: boolean;
  }
  body?: {
  }
}
