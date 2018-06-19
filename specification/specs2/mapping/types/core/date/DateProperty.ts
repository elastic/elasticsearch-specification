class DateProperty extends DocValuesPropertyBase {
	index: boolean;
	boost: double;
	null_value: Date;
	precision_step: integer;
	ignore_malformed: boolean;
	format: string;
	fielddata: NumericFielddata;
}
