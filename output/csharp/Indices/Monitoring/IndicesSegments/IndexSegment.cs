using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class IndexSegment  {
		
		[DataMember(Name="shards")]
		public IDictionary<string, ShardsSegment> Shards { get; set; }

	}
}
