@rest_spec_name("ilm.move_to_step")
class MoveToStepRequest extends RequestBase {
  query_parameters?: {
  }
  body?: {
    current_step?: StepKey;
    next_step?: StepKey;
  }
}
