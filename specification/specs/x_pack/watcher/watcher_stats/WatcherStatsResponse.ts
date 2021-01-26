class WatcherStatsResponse extends ResponseBase {
  cluster_name: string
  manually_stopped: boolean
  stats: WatcherNodeStats[]
}
