class LifecycleExplain {
	action: string;
	action_time_millis: Date;
	is_auto_retryable_error: boolean;
	failed_step: string;
	failed_step_retry_count: integer;
	index: IndexName;
	lifecycle_date_millis: Date;
	managed: boolean;
	phase: string;
	phase_time_millis: Date;
	policy: string;
	step: string;
	step_info: Dictionary<string, any>;
	step_time_millis: Date;
	age: Time;
}
