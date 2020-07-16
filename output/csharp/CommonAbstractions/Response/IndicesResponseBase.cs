using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonAbstractions {

	public class IndicesResponseBase : IResponse {
		
		[DataMember(Name="_shards")]
		public ShardStatistics Shards { get; set; }

	}
}
