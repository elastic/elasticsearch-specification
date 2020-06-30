@rest_spec_name("snapshot.restore")
class RestoreRequest extends RequestBase {
	query_parameters: {
		master_timeout: Time;
		wait_for_completion: boolean;
	}
	body: {
		ignore_index_settings: string[];
		ignore_unavailable: boolean;
		include_aliases: boolean;
		include_global_state: boolean;
		index_settings: UpdateIndexSettingsRequest;
		indices: Indices;
		partial: boolean;
		rename_pattern: string;
		rename_replacement: string;
	}
}
