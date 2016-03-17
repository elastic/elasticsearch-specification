
/**namespace:Mapping.Types.Core.String */
interface string_property {
	index: FieldIndexOption;
	term_vector: TermVectorOption;
	boost: double;
	null_value: string;
	norms: norms;
	index_options: IndexOptions;
	analyzer: string;
	search_analyzer: string;
	include_in_all: boolean;
	ignore_above: integer;
	position_offset_gap: integer;
	fielddata: string_fielddata;
}