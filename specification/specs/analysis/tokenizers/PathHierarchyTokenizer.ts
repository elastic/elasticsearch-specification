class PathHierarchyTokenizer extends TokenizerBase {
	@prop_serializer("NullableStringIntFormatter")
	buffer_size: integer;
	delimiter: string;
	replacement: string;
	@prop_serializer("NullableStringBooleanFormatter")
	reverse: boolean;
	@prop_serializer("NullableStringIntFormatter")
	skip: integer;
}
