using Nest.Aggregations;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class MatrixStatsAggregation  {
		
		[DataMember(Name="mode")]
		public MatrixStatsMode Mode { get; set; }

	}
}
