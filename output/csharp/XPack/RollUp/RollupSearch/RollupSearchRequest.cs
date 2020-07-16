using Nest.Aggregations;
using Nest.QueryDsl;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RollupSearchRequest : RequestBase {
		
		[DataMember(Name="total_hits_as_integer")]
		public bool TotalHitsAsInteger { get; set; }


		[DataMember(Name="typed_keys")]
		public bool TypedKeys { get; set; }


		[DataMember(Name="aggs")]
		public IDictionary<string, AggregationContainer> Aggs { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }

	}
}
