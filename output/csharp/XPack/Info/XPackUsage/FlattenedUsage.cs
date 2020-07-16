using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FlattenedUsage : XPackUsage {
		
		[DataMember(Name="field_count")]
		public int FieldCount { get; set; }

	}
}
