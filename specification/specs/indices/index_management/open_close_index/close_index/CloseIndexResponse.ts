class CloseIndexResponse extends AcknowledgedResponseBase {
  indices: Dictionary<string, CloseIndexResult>;
  shards_acknowledged: boolean;
}
