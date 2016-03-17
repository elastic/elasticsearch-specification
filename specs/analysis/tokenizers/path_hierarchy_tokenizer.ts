
/**namespace:Analysis.Tokenizers */
interface path_hierarchy_tokenizer extends tokenizer_base {
	delimiter: string;
	replacement: string;
	buffer_size: integer;
	reverse: boolean;
	skip: integer;
}