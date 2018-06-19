class GenericProperty extends DocValuesPropertyBase {
	term_vector: TermVectorOption;
	boost: double;
	search_analyzer: string;
	ignore_above: integer;
	position_increment_gap: integer;
	fielddata: StringFielddata;
	index: FieldIndexOption;
	null_value: string;
	norms: boolean;
	index_options: IndexOptions;
	analyzer: string;
	type: string;
}
