@rest_spec_name("cat.ml_trained_models")
class CatTrainedModelsRequest extends RequestBase {
  query_parameters: {
    allow_no_match: boolean;
    bytes: Bytes;
    format: string;
    from: integer;
    headers: string[];
    help: boolean;
    size: integer;
    sort_by_columns: string[];
    verbose: boolean;
  }
  body: {
  }
}
