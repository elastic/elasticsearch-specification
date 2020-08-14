//  Any property here is a common query parameter for each Request.
class RequestBase {
  error_trace: boolean;
  filter_path: string | string[];
  human: boolean;
  pretty: boolean;
  source_query_string: string;
}
