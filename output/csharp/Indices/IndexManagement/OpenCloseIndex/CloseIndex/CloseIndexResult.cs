using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class CloseIndexResult  {
		
		[DataMember(Name="closed")]
		public bool Closed { get; set; }


		[DataMember(Name="shards")]
		public IDictionary<string, CloseShardResult> Shards { get; set; }

	}
}
