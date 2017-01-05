
/**namespace:Analysis.TokenFilters.Synonym */
interface synonym_token_filter extends token_filter_base {
	synonyms_path: string;
	format: SynonymFormat;
	synonyms: string[];
	ignore_case: boolean;
	expand: boolean;
	tokenizer: string;
}