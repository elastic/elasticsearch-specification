class WatcherNodeStats {
	watcher_state: WatcherState;
	watch_count: long;
	execution_thread_pool: ExecutionThreadPool;
	current_watches: WatchRecordStats[];
	queued_watches: WatchRecordQueuedStats[];
}
