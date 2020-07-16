using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SlmUsage : XPackUsage {
		
		[DataMember(Name="policy_count")]
		public int PolicyCount { get; set; }


		[DataMember(Name="policy_stats")]
		public SnapshotLifecycleStats PolicyStats { get; set; }

	}
}
