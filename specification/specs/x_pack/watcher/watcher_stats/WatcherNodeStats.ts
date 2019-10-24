class WatcherNodeStats {
	current_watches: WatchRecordStats[];
	execution_thread_pool: ExecutionThreadPool;
	queued_watches: WatchRecordQueuedStats[];
	watch_count: long;
	watcher_state: WatcherState;
}
