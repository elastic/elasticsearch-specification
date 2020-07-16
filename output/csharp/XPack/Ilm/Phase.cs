using Nest.XPack;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Phase  {
		
		[DataMember(Name="actions")]
		public IDictionary<string, LifecycleAction> Actions { get; set; }


		[DataMember(Name="min_age")]
		public Time MinAge { get; set; }

	}
}
