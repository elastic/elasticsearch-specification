using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FollowIndexStats  {
		
		[DataMember(Name="index")]
		public string Index { get; set; }


		[DataMember(Name="shards")]
		public List<FollowIndexShardStats> Shards { get; set; }

	}
}
