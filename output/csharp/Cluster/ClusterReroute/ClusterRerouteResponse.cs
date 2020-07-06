using Nest.Cluster;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterRerouteResponse : IResponse {
		
		[DataMember(Name="explanations")]
		public List<ClusterRerouteExplanation> Explanations { get; set; }


		[DataMember(Name="state")]
		public List<string> State { get; set; }

	}
}
