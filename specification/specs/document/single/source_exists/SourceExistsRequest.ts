@rest_spec_name('exists_source')
class SourceExistsRequest extends RequestBase {
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
    source_excludes?: Field[]
    source_includes?: Field[]
    version?: long
    version_type?: VersionType
  }
  body?: {}
}
