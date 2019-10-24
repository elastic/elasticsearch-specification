@rest_spec_name("ilm.move_to_step")
class MoveToStepRequest extends RequestBase {
	current_step: StepKey;
	next_step: StepKey;
}
