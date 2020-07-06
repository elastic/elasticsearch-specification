using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardRequestCache  {
		
		[DataMember(Name="evictions")]
		public long Evictions { get; set; }


		[DataMember(Name="hit_count")]
		public long HitCount { get; set; }


		[DataMember(Name="memory_size_in_bytes")]
		public long MemorySizeInBytes { get; set; }


		[DataMember(Name="miss_count")]
		public long MissCount { get; set; }

	}
}
