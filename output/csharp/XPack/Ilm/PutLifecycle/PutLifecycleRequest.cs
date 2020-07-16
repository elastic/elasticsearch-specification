using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutLifecycleRequest : RequestBase {
		
		[DataMember(Name="policy")]
		public Policy Policy { get; set; }

	}
}
