
/**namespace:Indices.IndexSettings.GetIndexSettings */
/**custom_serialization*/
interface get_index_settings_response extends response {
	Indices: map<string, index_state>[];
}