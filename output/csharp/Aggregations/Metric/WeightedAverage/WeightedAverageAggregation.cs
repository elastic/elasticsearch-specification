using Nest.Aggregations;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class WeightedAverageAggregation  {
		
		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="value")]
		public WeightedAverageValue Value { get; set; }


		[DataMember(Name="value_type")]
		public ValueType ValueType { get; set; }


		[DataMember(Name="weight")]
		public WeightedAverageValue Weight { get; set; }

	}
}
