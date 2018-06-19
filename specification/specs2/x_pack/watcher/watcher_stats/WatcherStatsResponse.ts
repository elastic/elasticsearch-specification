class WatcherStatsResponse extends ResponseBase {
	stats: WatcherNodeStats[];
	manually_stopped: boolean;
	cluster_name: string;
}
