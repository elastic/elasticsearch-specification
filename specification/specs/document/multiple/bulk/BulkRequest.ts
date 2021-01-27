/**
 * @type_stability stable
 */
@rest_spec_name('bulk')
@class_serializer('BulkRequestFormatter')
class BulkRequest<TSource> extends RequestBase {
  path_parts?: {
    index?: IndexName
    type?: TypeName
  }
  query_parameters?: {
    pipeline?: string
    refresh?: Refresh
    routing?: Routing
    _source?: boolean
    _source_excludes?: Field | Field[]
    _source_includes?: Field | Field[]
    timeout?: Time
    type_query_string?: string
    wait_for_active_shards?: string
    require_alias?: boolean
  }
  body?: Array<Union<BulkOperationContainer, TSource>>
}
