@rest_spec_name("ilm.move_to_step")
class MoveToStepRequest extends RequestBase {
  pathParts?: {
    index: string;
  }
  query_parameters?: {
  }
  body?: {
    current_step?: StepKey;
    next_step?: StepKey;
  }
}
