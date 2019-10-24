class CloneIndexResponse extends AcknowledgedResponseBase implements IResponse {
	shards_acknowledged: boolean;
	index: string;
}
