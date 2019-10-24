class GetWatchResponse extends ResponseBase implements IResponse {
	found: boolean;
	id: string;
	status: WatchStatus;
	watch: Watch;
}
