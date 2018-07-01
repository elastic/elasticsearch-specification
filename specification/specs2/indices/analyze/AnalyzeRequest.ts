@rest_spec_name("indices.analyze")
class AnalyzeRequest extends RequestBase {
	tokenizer: Union<string, Tokenizer>;
	analyzer: string;
	explain: boolean;
	attributes: string[];
	char_filter: Union<string, CharFilter>[];
	filter: Union<string, TokenFilter>[];
	normalizer: string;
	field: Field;
	text: string[];
	@request_parameter()
	prefer_local: boolean;
	@request_parameter()
	format: Format;
}
