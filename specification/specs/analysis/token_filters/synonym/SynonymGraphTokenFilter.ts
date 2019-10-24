class SynonymGraphTokenFilter extends TokenFilterBase {
	expand: boolean;
	format: SynonymFormat;
	lenient: boolean;
	synonyms: string[];
	synonyms_path: string;
	tokenizer: string;
}
