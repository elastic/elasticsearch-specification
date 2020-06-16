class PreviewTransformResponse<TTransform> extends ResponseBase implements IResponse {
	preview: TTransform[];
	generated_dest_index: IndexState;
}
