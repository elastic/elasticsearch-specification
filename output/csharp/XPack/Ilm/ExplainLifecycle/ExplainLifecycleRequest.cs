using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExplainLifecycleRequest : RequestBase {
		
		[DataMember(Name="only_errors")]
		public bool OnlyErrors { get; set; }


		[DataMember(Name="only_managed")]
		public bool OnlyManaged { get; set; }

	}
}
