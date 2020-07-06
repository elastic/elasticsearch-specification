using Nest.Aggregations;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class PercentileRanksAggregation  {
		
		[DataMember(Name="keyed")]
		public bool Keyed { get; set; }


		[DataMember(Name="method")]
		public PercentilesMethod Method { get; set; }


		[DataMember(Name="values")]
		public List<double> Values { get; set; }

	}
}
