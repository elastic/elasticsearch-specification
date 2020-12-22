@rest_spec_name("cat.ml_jobs")
class CatJobsRequest extends RequestBase {
  query_parameters?: {
    allow_no_jobs?: boolean;
    bytes?: Bytes;
    format?: string;
    headers?: string[];
    help?: boolean;
    sort_by_columns?: string[];
    verbose?: boolean;
  }
  body?: {
  }
}
