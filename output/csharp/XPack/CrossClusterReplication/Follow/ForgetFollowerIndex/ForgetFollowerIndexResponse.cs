using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ForgetFollowerIndexResponse : IResponse {
		
		[DataMember(Name="_shards")]
		public ShardStatistics Shards { get; set; }

	}
}
