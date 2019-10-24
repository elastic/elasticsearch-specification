class CloseIndexResponse extends AcknowledgedResponseBase implements IResponse {
	indices: Dictionary<string, CloseIndexResult>;
	shards_acknowledged: boolean;
}
