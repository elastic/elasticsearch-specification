using Nest.Internal;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ShardHealthStats  {
		
		[DataMember(Name="active_shards")]
		public int ActiveShards { get; set; }


		[DataMember(Name="initializing_shards")]
		public int InitializingShards { get; set; }


		[DataMember(Name="primary_active")]
		public bool PrimaryActive { get; set; }


		[DataMember(Name="relocating_shards")]
		public int RelocatingShards { get; set; }


		[DataMember(Name="status")]
		public Health Status { get; set; }


		[DataMember(Name="unassigned_shards")]
		public int UnassignedShards { get; set; }

	}
}
