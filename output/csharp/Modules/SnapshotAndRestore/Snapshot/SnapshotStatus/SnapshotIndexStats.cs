using Nest.Modules;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class SnapshotIndexStats  {
		
		[DataMember(Name="shards")]
		public IDictionary<string, SnapshotShardsStats> Shards { get; set; }


		[DataMember(Name="shards_stats")]
		public SnapshotShardsStats ShardsStats { get; set; }


		[DataMember(Name="stats")]
		public SnapshotStats Stats { get; set; }

	}
}
