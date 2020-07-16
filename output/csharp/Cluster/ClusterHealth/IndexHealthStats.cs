using Nest.Internal;
using Nest.Cluster;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class IndexHealthStats  {
		
		[DataMember(Name="active_primary_shards")]
		public int ActivePrimaryShards { get; set; }


		[DataMember(Name="active_shards")]
		public int ActiveShards { get; set; }


		[DataMember(Name="initializing_shards")]
		public int InitializingShards { get; set; }


		[DataMember(Name="number_of_replicas")]
		public int NumberOfReplicas { get; set; }


		[DataMember(Name="number_of_shards")]
		public int NumberOfShards { get; set; }


		[DataMember(Name="relocating_shards")]
		public int RelocatingShards { get; set; }


		[DataMember(Name="shards")]
		public IDictionary<string, ShardHealthStats> Shards { get; set; }


		[DataMember(Name="status")]
		public Health Status { get; set; }


		[DataMember(Name="unassigned_shards")]
		public int UnassignedShards { get; set; }

	}
}
