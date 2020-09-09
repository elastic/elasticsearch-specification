@rest_spec_name("indices.delete_template")
class DeleteIndexTemplateRequest extends RequestBase {
  query_parameters: {
    master_timeout: Time;
    timeout: Time;
  }
  body: {
  }
}
