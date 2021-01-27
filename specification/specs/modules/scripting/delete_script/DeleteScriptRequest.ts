@rest_spec_name('delete_script')
class DeleteScriptRequest extends RequestBase {
  path_parts?: {
    id: Id
  }
  query_parameters?: {
    master_timeout?: Time
    timeout?: Time
  }
  body?: {}
}
