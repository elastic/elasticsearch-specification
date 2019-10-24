@rest_spec_name("snapshot.restore")
class RestoreRequest extends RequestBase {
	ignore_index_settings: string[];
	ignore_unavailable: boolean;
	include_aliases: boolean;
	include_global_state: boolean;
	index_settings: UpdateIndexSettingsRequest;
	indices: Indices;
	partial: boolean;
	rename_pattern: string;
	rename_replacement: string;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	wait_for_completion: boolean;
}
