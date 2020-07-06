using Nest.Aggregations;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class BucketAggregation  {
		
		[DataMember(Name="aggregations")]
		public IDictionary<string, AggregationContainer> Aggregations { get; set; }

	}
}
