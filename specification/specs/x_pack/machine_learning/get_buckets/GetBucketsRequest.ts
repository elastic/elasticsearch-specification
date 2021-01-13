@rest_spec_name("ml.get_buckets")
class GetBucketsRequest extends RequestBase {
  pathParts?: {
    job_id: string;
    timestamp?: string;
  }
  query_parameters?: {
  }
  body?: {
    anomaly_score?: double;
    desc?: boolean;
    end?: Date;
    exclude_interim?: boolean;
    expand?: boolean;
    page?: Page;
    sort?: Field;
    start?: Date;
  }
}
