
/**namespace:Mapping.Types.Specialized.Completion */
interface completion_property extends property_base {
	search_analyzer: string;
	analyzer: string;
	payloads: boolean;
	preserve_separators: boolean;
	preserve_position_increments: boolean;
	max_input_length: integer;
	context: map<string, suggest_context>[];
}