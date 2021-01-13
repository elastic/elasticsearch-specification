@rest_spec_name("cat.ml_trained_models")
class CatTrainedModelsRequest extends CatRequestBase {
  pathParts?: {
    model_id?: string;
  }
  query_parameters?: {
    allow_no_match?: boolean;
    bytes?: Bytes;
    from?: integer;
    size?: integer;
  }
  body?: {
  }
}
