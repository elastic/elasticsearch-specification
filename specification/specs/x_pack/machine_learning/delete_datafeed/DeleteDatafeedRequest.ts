@rest_spec_name("ml.delete_datafeed")
class DeleteDatafeedRequest extends RequestBase {
  path_parts?: {
    datafeed_id: string;
  }
  query_parameters?: {
    force?: boolean;
  }
  body?: {
  }
}
