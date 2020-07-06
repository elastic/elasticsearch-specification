using Nest.Modules;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class SnapshotStatus  {
		
		[DataMember(Name="include_global_state")]
		public bool IncludeGlobalState { get; set; }


		[DataMember(Name="indices")]
		public IDictionary<string, SnapshotIndexStats> Indices { get; set; }


		[DataMember(Name="repository")]
		public string Repository { get; set; }


		[DataMember(Name="shards_stats")]
		public SnapshotShardsStats ShardsStats { get; set; }


		[DataMember(Name="snapshot")]
		public string Snapshot { get; set; }


		[DataMember(Name="state")]
		public string State { get; set; }


		[DataMember(Name="stats")]
		public SnapshotStats Stats { get; set; }


		[DataMember(Name="uuid")]
		public string Uuid { get; set; }

	}
}
