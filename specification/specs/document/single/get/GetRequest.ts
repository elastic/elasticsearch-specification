/**
 * @type_stability stable
 */
@rest_spec_name('get')
class GetRequest extends RequestBase {
  path_parts?: {
    id: Id
    index: IndexName
    type?: TypeName
  }
  query_parameters?: {
    preference?: string
    realtime?: boolean
    refresh?: boolean
    routing?: Routing
    source_enabled?: boolean
    _source_excludes?: Fields
    _source_includes?: Fields
    stored_fields?: Fields
    version?: long
    version_type?: VersionType
    _source?: Union<boolean, Union<string, string[]>>
  }
  body?: {}
}
