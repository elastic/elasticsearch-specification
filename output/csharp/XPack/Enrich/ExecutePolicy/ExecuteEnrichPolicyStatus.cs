using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecuteEnrichPolicyStatus  {
		
		[DataMember(Name="phase")]
		public EnrichPolicyPhase Phase { get; set; }

	}
}
