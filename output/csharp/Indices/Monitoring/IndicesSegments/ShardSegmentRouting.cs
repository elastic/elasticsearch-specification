using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardSegmentRouting  {
		
		[DataMember(Name="node")]
		public string Node { get; set; }


		[DataMember(Name="primary")]
		public bool Primary { get; set; }


		[DataMember(Name="state")]
		public string State { get; set; }

	}
}
