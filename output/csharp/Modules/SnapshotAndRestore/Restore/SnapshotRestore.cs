using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class SnapshotRestore  {
		
		[DataMember(Name="indices")]
		public List<IndexName> Indices { get; set; }


		[DataMember(Name="snapshot")]
		public string Snapshot { get; set; }


		[DataMember(Name="shards")]
		public ShardStatistics Shards { get; set; }

	}
}
