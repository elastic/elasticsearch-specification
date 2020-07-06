using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CreateFollowIndexResponse : IResponse {
		
		[DataMember(Name="follow_index_created")]
		public bool FollowIndexCreated { get; set; }


		[DataMember(Name="follow_index_shards_acked")]
		public bool FollowIndexShardsAcked { get; set; }


		[DataMember(Name="index_following_started")]
		public bool IndexFollowingStarted { get; set; }

	}
}
