using Nest.Indices;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class IndicesStatsResponse : IResponse {
		
		[DataMember(Name="indices")]
		public IDictionary<string, IndicesStats> Indices { get; set; }


		[DataMember(Name="_shards")]
		public ShardStatistics Shards { get; set; }


		[DataMember(Name="_all")]
		public IndicesStats All { get; set; }

	}
}
