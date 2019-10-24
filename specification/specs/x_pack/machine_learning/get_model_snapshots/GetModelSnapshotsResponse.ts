class GetModelSnapshotsResponse extends ResponseBase implements IResponse {
	count: long;
	model_snapshots: ModelSnapshot[];
}
