using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CcrUsage : XPackUsage {
		
		[DataMember(Name="auto_follow_patterns_count")]
		public int AutoFollowPatternsCount { get; set; }


		[DataMember(Name="follower_indices_count")]
		public int FollowerIndicesCount { get; set; }

	}
}
