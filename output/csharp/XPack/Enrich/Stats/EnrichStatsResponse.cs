using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class EnrichStatsResponse : IResponse {
		
		[DataMember(Name="coordinator_stats")]
		public List<CoordinatorStats> CoordinatorStats { get; set; }


		[DataMember(Name="executing_policies")]
		public List<ExecutingPolicy> ExecutingPolicies { get; set; }

	}
}
