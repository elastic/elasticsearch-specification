using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SqlUsage : XPackUsage {
		
		[DataMember(Name="features")]
		public IDictionary<string, int> Features { get; set; }


		[DataMember(Name="queries")]
		public IDictionary<string, QueryUsage> Queries { get; set; }

	}
}
