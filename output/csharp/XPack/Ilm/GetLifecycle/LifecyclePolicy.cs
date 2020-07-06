using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class LifecyclePolicy  {
		
		[DataMember(Name="modified_date")]
		public DateTimeOffset ModifiedDate { get; set; }


		[DataMember(Name="policy")]
		public Policy Policy { get; set; }


		[DataMember(Name="version")]
		public int Version { get; set; }

	}
}
