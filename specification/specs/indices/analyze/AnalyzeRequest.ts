@rest_spec_name("indices.analyze")
class AnalyzeRequest extends RequestBase {
	query_parameters: {
	}
	body: {
		analyzer: string;
		attributes: string[];
		char_filter: Union<string, ICharFilter>[];
		explain: boolean;
		field: Field;
		filter: Union<string, ITokenFilter>[];
		normalizer: string;
		text: string[];
		tokenizer: Union<string, ITokenizer>;
	}
}
