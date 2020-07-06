using Nest.Cluster;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterStatsResponse : IResponse {
		
		[DataMember(Name="cluster_name")]
		public string ClusterName { get; set; }


		[DataMember(Name="cluster_uuid")]
		public string ClusterUuid { get; set; }


		[DataMember(Name="indices")]
		public ClusterIndicesStats Indices { get; set; }


		[DataMember(Name="nodes")]
		public ClusterNodesStats Nodes { get; set; }


		[DataMember(Name="status")]
		public ClusterStatus Status { get; set; }


		[DataMember(Name="timestamp")]
		public long Timestamp { get; set; }

	}
}
