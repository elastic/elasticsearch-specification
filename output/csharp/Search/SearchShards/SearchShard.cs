using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SearchShard  {
		
		[DataMember(Name="index")]
		public string Index { get; set; }


		[DataMember(Name="node")]
		public string Node { get; set; }


		[DataMember(Name="primary")]
		public bool Primary { get; set; }


		[DataMember(Name="relocating_node")]
		public string RelocatingNode { get; set; }


		[DataMember(Name="shard")]
		public int Shard { get; set; }


		[DataMember(Name="state")]
		public string State { get; set; }

	}
}
