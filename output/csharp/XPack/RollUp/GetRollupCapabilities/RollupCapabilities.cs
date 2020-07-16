using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RollupCapabilities  {
		
		[DataMember(Name="rollup_jobs")]
		public List<RollupCapabilitiesJob> RollupJobs { get; set; }

	}
}
