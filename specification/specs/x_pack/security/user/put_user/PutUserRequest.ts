@rest_spec_name("security.put_user")
class PutUserRequest extends RequestBase {
  query_parameters?: {
    refresh?: Refresh;
  }
  body?: {
    email?: string;
    full_name?: string;
    metadata?: Dictionary<string, UserDefinedValue>;
    password?: string;
    password_hash?: string;
    roles?: string[];
  }
}
