using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FollowIndexStatsResponse : IResponse {
		
		[DataMember(Name="indices")]
		public List<FollowIndexStats> Indices { get; set; }

	}
}
