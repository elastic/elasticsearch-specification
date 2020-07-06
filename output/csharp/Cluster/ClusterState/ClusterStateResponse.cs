using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterStateResponse : ResponseBase {
		
		[DataMember(Name="cluster_name")]
		public string ClusterName { get; set; }


		[DataMember(Name="cluster_uuid")]
		public string ClusterUuid { get; set; }


		[DataMember(Name="master_node")]
		public string MasterNode { get; set; }


		[DataMember(Name="state")]
		public List<string> State { get; set; }


		[DataMember(Name="state_uuid")]
		public string StateUuid { get; set; }


		[DataMember(Name="version")]
		public long Version { get; set; }

	}
}
