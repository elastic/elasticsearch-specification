
/**namespace:Analysis.Analyzers */
interface custom_analyzer extends analyzer_base {
	tokenizer: string;
	filter: string[];
	char_filter: string[];
	position_offset_gap: integer;
}