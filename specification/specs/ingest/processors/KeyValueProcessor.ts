class KeyValueProcessor extends ProcessorBase {
	exclude_keys: string[];
	field: Field;
	field_split: string;
	ignore_missing: boolean;
	include_keys: string[];
	prefix: string;
	strip_brackets: boolean;
	target_field: Field;
	trim_key: string;
	trim_value: string;
	value_split: string;
}
