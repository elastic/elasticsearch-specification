@rest_spec_name("cat.health")
class CatHealthRequest extends CatRequestBase {
  query_parameters?: {
    include_timestamp?: boolean;
  }
  body?: {
  }
}
