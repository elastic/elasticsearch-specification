using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class CardinalityAggregation  {
		
		[DataMember(Name="precision_threshold")]
		public int PrecisionThreshold { get; set; }


		[DataMember(Name="rehash")]
		public bool Rehash { get; set; }

	}
}
