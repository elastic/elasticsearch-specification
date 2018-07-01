class SynonymGraphTokenFilter extends TokenFilterBase {
	synonyms_path: string;
	format: SynonymFormat;
	synonyms: string[];
	ignore_case: boolean;
	expand: boolean;
	tokenizer: string;
}
