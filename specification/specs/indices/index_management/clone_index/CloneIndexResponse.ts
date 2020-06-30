class CloneIndexResponse extends AcknowledgedResponseBase implements IResponse {
	index: string;
	shards_acknowledged: boolean;
}
