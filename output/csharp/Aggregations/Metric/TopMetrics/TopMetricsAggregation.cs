using Nest.Aggregations;
using Nest.Internal;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class TopMetricsAggregation  {
		
		[DataMember(Name="metrics")]
		public List<TopMetricsValue> Metrics { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }


		[DataMember(Name="sort")]
		public List<Sort> Sort { get; set; }

	}
}
