class TextProperty extends CorePropertyBase {
	boost: double;
	eager_global_ordinals: boolean;
	fielddata: boolean;
	fielddata_frequency_filter: FielddataFrequencyFilter;
	index: boolean;
	index_options: IndexOptions;
	norms: boolean;
	position_increment_gap: integer;
	analyzer: string;
	search_analyzer: string;
	search_quote_analyzer: string;
	term_vector: TermVectorOption;
}
