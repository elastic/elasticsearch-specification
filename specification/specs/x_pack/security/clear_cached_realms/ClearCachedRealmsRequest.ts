@rest_spec_name("security.clear_cached_realms")
class ClearCachedRealmsRequest extends RequestBase {
  pathParts?: {
    realms: string | string[];
  }
  query_parameters?: {
    usernames?: string[];
  }
  body?: {
  }
}
