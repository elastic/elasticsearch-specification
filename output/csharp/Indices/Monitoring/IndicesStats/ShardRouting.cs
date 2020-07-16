using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardRouting  {
		
		[DataMember(Name="node")]
		public string Node { get; set; }


		[DataMember(Name="primary")]
		public bool Primary { get; set; }


		[DataMember(Name="relocating_node")]
		public string RelocatingNode { get; set; }


		[DataMember(Name="state")]
		public ShardRoutingState State { get; set; }

	}
}
