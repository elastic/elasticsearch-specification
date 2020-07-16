using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RollupIndexCapabilities  {
		
		[DataMember(Name="rollup_jobs")]
		public List<RollupIndexCapabilitiesJob> RollupJobs { get; set; }

	}
}
