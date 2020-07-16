using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CcrStatsResponse : IResponse {
		
		[DataMember(Name="auto_follow_stats")]
		public CcrAutoFollowStats AutoFollowStats { get; set; }


		[DataMember(Name="follow_stats")]
		public CcrFollowStats FollowStats { get; set; }

	}
}
