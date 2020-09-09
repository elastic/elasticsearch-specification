class CreateIndexResponse extends AcknowledgedResponseBase {
  index: string;
  shards_acknowledged: boolean;
}
