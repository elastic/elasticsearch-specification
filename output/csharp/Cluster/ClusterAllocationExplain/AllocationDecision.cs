using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class AllocationDecision  {
		
		[DataMember(Name="decider")]
		public string Decider { get; set; }


		[DataMember(Name="decision")]
		public AllocationExplainDecision Decision { get; set; }


		[DataMember(Name="explanation")]
		public string Explanation { get; set; }

	}
}
