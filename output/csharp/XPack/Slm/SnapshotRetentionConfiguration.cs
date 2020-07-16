using Nest.CommonOptions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SnapshotRetentionConfiguration  {
		
		[DataMember(Name="expire_after")]
		public Time ExpireAfter { get; set; }


		[DataMember(Name="max_count")]
		public int MaxCount { get; set; }


		[DataMember(Name="min_count")]
		public int MinCount { get; set; }

	}
}
