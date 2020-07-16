class CsvProcessor extends ProcessorBase {
	empty_value: any;
	field: Field;
	ignore_missing: boolean;
	quote: string;
	separator: string;
	target_fields: Field[];
	trim: boolean;
}
