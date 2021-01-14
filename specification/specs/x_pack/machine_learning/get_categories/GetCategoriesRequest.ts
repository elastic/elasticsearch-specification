@rest_spec_name("ml.get_categories")
class GetCategoriesRequest extends RequestBase {
  path_parts?: {
    job_id: string;
    category_id?: long;
  }
  query_parameters?: {
  }
  body?: {
    page?: Page;
  }
}
