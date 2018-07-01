class MultiTermVectorsResponse extends ResponseBase {
	@prop_serializer("ReadOnlyCollectionJsonConverter`2")
	docs: TermVectors[];
}
