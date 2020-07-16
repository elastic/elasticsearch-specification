class GrokProcessor extends ProcessorBase {
	field: Field;
	ignore_missing: boolean;
	pattern_definitions: Dictionary<string, string>;
	patterns: string[];
	trace_match: boolean;
}
