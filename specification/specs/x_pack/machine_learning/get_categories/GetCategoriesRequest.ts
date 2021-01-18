@rest_spec_name("ml.get_categories")
class GetCategoriesRequest extends RequestBase {
  path_parts?: {
    job_id: Id;
    category_id?: CategoryId;
  }
  query_parameters?: {
  }
  body?: {
    page?: Page;
  }
}
