using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class PercentilesBucketAggregation  {
		
		[DataMember(Name="percents")]
		public List<double> Percents { get; set; }

	}
}
