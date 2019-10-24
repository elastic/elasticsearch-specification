class SnapshotStatus {
	include_global_state: boolean;
	indices: Dictionary<string, SnapshotIndexStats>;
	repository: string;
	shards_stats: SnapshotShardsStats;
	snapshot: string;
	state: string;
	stats: SnapshotStats;
	u_u_i_d: string;
}
