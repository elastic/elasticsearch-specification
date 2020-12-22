@rest_spec_name("security.put_privileges")
@class_serializer("PutPrivilegesFormatter")
class PutPrivilegesRequest extends RequestBase {
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
    applications?: Dictionary<string, Dictionary<string, PrivilegesActions>>;
  }
}
