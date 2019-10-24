class CreateIndexResponse extends AcknowledgedResponseBase implements IResponse {
	shards_acknowledged: boolean;
	index: string;
}
