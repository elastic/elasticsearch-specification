using Nest.Indices;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class SegmentsResponse : IResponse {
		
		[DataMember(Name="indices")]
		public IDictionary<string, IndexSegment> Indices { get; set; }


		[DataMember(Name="_shards")]
		public ShardStatistics Shards { get; set; }

	}
}
