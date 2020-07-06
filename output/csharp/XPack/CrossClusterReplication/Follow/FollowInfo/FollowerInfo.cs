using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FollowerInfo  {
		
		[DataMember(Name="follower_index")]
		public string FollowerIndex { get; set; }


		[DataMember(Name="leader_index")]
		public string LeaderIndex { get; set; }


		[DataMember(Name="parameters")]
		public FollowConfig Parameters { get; set; }


		[DataMember(Name="remote_cluster")]
		public string RemoteCluster { get; set; }


		[DataMember(Name="status")]
		public FollowerIndexStatus Status { get; set; }

	}
}
