using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FollowInfoResponse : IResponse {
		
		[DataMember(Name="follower_indices")]
		public List<FollowerInfo> FollowerIndices { get; set; }

	}
}
