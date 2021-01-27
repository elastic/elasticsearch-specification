@rest_spec_name('reindex')
class ReindexRequest extends RequestBase {
  query_parameters?: {
    refresh?: boolean
    requests_per_second?: long
    scroll?: Time
    slices?: long
    timeout?: Time
    wait_for_active_shards?: string
    wait_for_completion?: boolean
    require_alias?: boolean
  }
  body?: {
    conflicts?: Conflicts
    dest?: ReindexDestination
    max_docs?: long
    script?: Script
    size?: long
    source?: ReindexSource
  }
}
