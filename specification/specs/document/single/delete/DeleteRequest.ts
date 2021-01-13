/**
 * @type_stability stable
 */
@rest_spec_name("delete")
class DeleteRequest extends RequestBase {
  pathParts?: {
    id: string;
    index: string;
    type?: string;
  }
  query_parameters?: {
    if_primary_term?: long;
    if_seq_no?: long;
    refresh?: Refresh;
    routing?: Routing;
    timeout?: Time;
    version?: long;
    version_type?: VersionType;
    wait_for_active_shards?: string;
  }
  body?: {
  }
}
