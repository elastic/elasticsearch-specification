using Nest.Internal;
using Nest.CommonAbstractions;
using Nest.Cluster;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterHealthResponse : IResponse {
		
		[DataMember(Name="active_primary_shards")]
		public int ActivePrimaryShards { get; set; }


		[DataMember(Name="active_shards")]
		public int ActiveShards { get; set; }


		[DataMember(Name="active_shards_percent_as_number")]
		public double ActiveShardsPercentAsNumber { get; set; }


		[DataMember(Name="cluster_name")]
		public string ClusterName { get; set; }


		[DataMember(Name="delayed_unassigned_shards")]
		public int DelayedUnassignedShards { get; set; }


		[DataMember(Name="indices")]
		public IDictionary<IndexName, IndexHealthStats> Indices { get; set; }


		[DataMember(Name="initializing_shards")]
		public int InitializingShards { get; set; }


		[DataMember(Name="number_of_data_nodes")]
		public int NumberOfDataNodes { get; set; }


		[DataMember(Name="number_of_in_flight_fetch")]
		public int NumberOfInFlightFetch { get; set; }


		[DataMember(Name="number_of_nodes")]
		public int NumberOfNodes { get; set; }


		[DataMember(Name="number_of_pending_tasks")]
		public int NumberOfPendingTasks { get; set; }


		[DataMember(Name="relocating_shards")]
		public int RelocatingShards { get; set; }


		[DataMember(Name="status")]
		public Health Status { get; set; }


		[DataMember(Name="task_max_waiting_in_queue_millis")]
		public long TaskMaxWaitingInQueueMillis { get; set; }


		[DataMember(Name="timed_out")]
		public bool TimedOut { get; set; }


		[DataMember(Name="unassigned_shards")]
		public int UnassignedShards { get; set; }

	}
}
