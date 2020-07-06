using Nest.Aggregations;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class PercentilesAggregation  {
		
		[DataMember(Name="keyed")]
		public bool Keyed { get; set; }


		[DataMember(Name="method")]
		public PercentilesMethod Method { get; set; }


		[DataMember(Name="percents")]
		public List<double> Percents { get; set; }

	}
}
