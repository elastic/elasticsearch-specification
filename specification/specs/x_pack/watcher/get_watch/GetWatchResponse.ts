class GetWatchResponse extends ResponseBase implements IResponse {
	found: boolean;
	_id: string;
	status: WatchStatus;
	watch: Watch;
}
