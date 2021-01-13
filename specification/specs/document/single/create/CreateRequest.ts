/**
 * @type_stability stable
 */
@rest_spec_name("create")
@class_serializer("CreateRequestFormatter`1")
class CreateRequest<TDocument> extends RequestBase {
  pathParts?: {
    id: string;
    index: string;
    type?: string;
  }
  query_parameters?: {
    pipeline?: string;
    refresh?: Refresh;
    routing?: Routing;
    timeout?: Time;
    version?: long;
    version_type?: VersionType;
    wait_for_active_shards?: string;
  }
  body?: TDocument;
}
