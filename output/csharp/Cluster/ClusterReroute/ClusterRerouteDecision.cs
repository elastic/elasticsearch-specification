using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterRerouteDecision  {
		
		[DataMember(Name="decider")]
		public string Decider { get; set; }


		[DataMember(Name="decision")]
		public string Decision { get; set; }


		[DataMember(Name="explanation")]
		public string Explanation { get; set; }

	}
}
