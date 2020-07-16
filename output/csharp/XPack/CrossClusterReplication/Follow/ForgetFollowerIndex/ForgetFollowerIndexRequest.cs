using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ForgetFollowerIndexRequest : RequestBase {
		
		[DataMember(Name="follower_cluster")]
		public string FollowerCluster { get; set; }


		[DataMember(Name="follower_index")]
		public IndexName FollowerIndex { get; set; }


		[DataMember(Name="follower_index_uuid")]
		public string FollowerIndexUuid { get; set; }


		[DataMember(Name="leader_remote_cluster")]
		public string LeaderRemoteCluster { get; set; }

	}
}
