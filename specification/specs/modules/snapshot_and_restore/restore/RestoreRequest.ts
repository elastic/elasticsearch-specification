@rest_spec_name("snapshot.restore")
class RestoreRequest extends RequestBase {
	indices: Indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	rename_pattern: string;
	rename_replacement: string;
	index_settings: UpdateIndexSettingsRequest;
	ignore_index_settings: string[];
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	wait_for_completion: boolean;
}
