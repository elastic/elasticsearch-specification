@rest_spec_name('ml.get_overall_buckets')
class GetOverallBucketsRequest extends RequestBase {
  path_parts?: {
    job_id: Id
  }
  query_parameters?: {}
  body?: {
    allow_no_jobs?: boolean
    bucket_span?: Time
    end?: Date
    exclude_interim?: boolean
    overall_score?: double
    start?: Date
    top_n?: integer
  }
}
