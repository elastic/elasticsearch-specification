using Nest.Cluster;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodesUsageResponse : IResponse {
		
		[DataMember(Name="cluster_name")]
		public string ClusterName { get; set; }


		[DataMember(Name="nodes")]
		public IDictionary<string, NodeUsageInformation> Nodes { get; set; }

	}
}
