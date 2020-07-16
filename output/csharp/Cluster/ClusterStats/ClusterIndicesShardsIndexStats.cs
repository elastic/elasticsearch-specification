using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterIndicesShardsIndexStats  {
		
		[DataMember(Name="primaries")]
		public ClusterShardMetrics Primaries { get; set; }


		[DataMember(Name="replication")]
		public ClusterShardMetrics Replication { get; set; }


		[DataMember(Name="shards")]
		public ClusterShardMetrics Shards { get; set; }

	}
}
