using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class WatcherNodeStats  {
		
		[DataMember(Name="current_watches")]
		public List<WatchRecordStats> CurrentWatches { get; set; }


		[DataMember(Name="execution_thread_pool")]
		public ExecutionThreadPool ExecutionThreadPool { get; set; }


		[DataMember(Name="queued_watches")]
		public List<WatchRecordQueuedStats> QueuedWatches { get; set; }


		[DataMember(Name="watch_count")]
		public long WatchCount { get; set; }


		[DataMember(Name="watcher_state")]
		public WatcherState WatcherState { get; set; }

	}
}
