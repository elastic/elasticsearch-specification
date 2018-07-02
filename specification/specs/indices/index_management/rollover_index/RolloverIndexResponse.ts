class RolloverIndexResponse extends AcknowledgedResponseBase {
	dry_run: boolean;
	new_index: string;
	old_index: string;
	rolled_over: boolean;
	conditions: Dictionary<string, boolean>[];
	shards_acknowledged: boolean;
}
