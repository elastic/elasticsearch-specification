class GetTransformStatsResponse extends ResponseBase implements IResponse {
	count: long;
	transforms: TransformStats[];
}
