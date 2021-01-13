@rest_spec_name("cat.ml_jobs")
class CatJobsRequest extends CatRequestBase {
  query_parameters?: {
    allow_no_jobs?: boolean;
    bytes?: Bytes;
  }
  body?: {
  }
}
