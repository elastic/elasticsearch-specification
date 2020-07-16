using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class RangeAggregation  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="ranges")]
		public List<AggregationRange> Ranges { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }

	}
}
