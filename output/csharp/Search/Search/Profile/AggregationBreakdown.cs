using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class AggregationBreakdown  {
		
		[DataMember(Name="build_aggregation")]
		public long BuildAggregation { get; set; }


		[DataMember(Name="build_aggregation_count")]
		public long BuildAggregationCount { get; set; }


		[DataMember(Name="collect")]
		public long Collect { get; set; }


		[DataMember(Name="collect_count")]
		public long CollectCount { get; set; }


		[DataMember(Name="initialize")]
		public long Initialize { get; set; }


		[DataMember(Name="intialize_count")]
		public long IntializeCount { get; set; }


		[DataMember(Name="reduce")]
		public long Reduce { get; set; }


		[DataMember(Name="reduce_count")]
		public long ReduceCount { get; set; }

	}
}
