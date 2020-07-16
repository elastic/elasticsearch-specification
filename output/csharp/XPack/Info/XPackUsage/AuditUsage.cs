using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AuditUsage : SecurityFeatureToggle {
		
		[DataMember(Name="outputs")]
		public List<string> Outputs { get; set; }

	}
}
