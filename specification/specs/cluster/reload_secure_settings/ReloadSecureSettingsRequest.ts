@rest_spec_name("nodes.reload_secure_settings")
class ReloadSecureSettingsRequest extends RequestBase {
  path_parts?: {
    node_id?: string | string[];
  }
  query_parameters?: {
    timeout?: Time;
  }
  body?: {
  }
}
