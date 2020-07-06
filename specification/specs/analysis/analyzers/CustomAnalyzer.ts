class CustomAnalyzer extends AnalyzerBase {
	/** @prop_serializer SingleOrEnumerableFormatter`1 */
	char_filter: string[];
	/** @prop_serializer SingleOrEnumerableFormatter`1 */
	filter: string[];
	/** @prop_serializer NullableStringIntFormatter */
	position_increment_gap: integer;
	/** @prop_serializer NullableStringIntFormatter */
	position_offset_gap: integer;
	tokenizer: string;
}
