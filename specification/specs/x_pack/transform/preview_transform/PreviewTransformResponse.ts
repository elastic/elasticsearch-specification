class PreviewTransformResponse<TTransform> extends ResponseBase implements IResponse {
	@prop_serializer("SourceFormatter`1")
	preview: TTransform[];
	generated_dest_index: IndexState;
}
