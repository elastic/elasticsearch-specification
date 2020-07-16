using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterRerouteExplanation  {
		
		[DataMember(Name="command")]
		public string Command { get; set; }


		[DataMember(Name="decisions")]
		public List<ClusterRerouteDecision> Decisions { get; set; }


		[DataMember(Name="parameters")]
		public ClusterRerouteParameters Parameters { get; set; }

	}
}
