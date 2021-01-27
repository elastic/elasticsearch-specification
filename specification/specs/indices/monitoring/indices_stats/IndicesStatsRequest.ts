/**
 * @type_stability stable
 */
@rest_spec_name('indices.stats')
class IndicesStatsRequest extends RequestBase {
  path_parts?: {
    metric?: Metrics
    index?: Indices
  }
  query_parameters?: {
    completion_fields?: Fields
    expand_wildcards?: ExpandWildcards
    fielddata_fields?: Fields
    fields?: Fields
    forbid_closed_indices?: boolean
    groups?: string | string[]
    include_segment_file_sizes?: boolean
    include_unloaded_segments?: boolean
    level?: Level
    types?: TypeNames
  }
  body?: {}
}
