using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class IlmUsage  {
		
		[DataMember(Name="policy_count")]
		public int PolicyCount { get; set; }


		[DataMember(Name="policy_stats")]
		public List<IlmPolicyStatistics> PolicyStats { get; set; }

	}
}
