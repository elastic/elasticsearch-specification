class WatcherStatsResponse extends ResponseBase implements IResponse {
	cluster_name: string;
	manually_stopped: boolean;
	stats: WatcherNodeStats[];
}
