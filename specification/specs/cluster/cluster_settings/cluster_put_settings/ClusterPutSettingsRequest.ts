@rest_spec_name('cluster.put_settings')
class ClusterPutSettingsRequest extends RequestBase {
  query_parameters?: {
    flat_settings?: boolean
    master_timeout?: Time
    timeout?: Time
  }
  body?: {
    persistent?: Dictionary<string, UserDefinedValue>
    transient?: Dictionary<string, UserDefinedValue>
  }
}
