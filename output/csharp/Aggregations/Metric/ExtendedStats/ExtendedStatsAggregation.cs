using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class ExtendedStatsAggregation  {
		
		[DataMember(Name="sigma")]
		public double Sigma { get; set; }

	}
}
