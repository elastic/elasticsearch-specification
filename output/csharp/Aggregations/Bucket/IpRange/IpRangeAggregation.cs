using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Aggregations;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class IpRangeAggregation  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="ranges")]
		public List<IpRangeAggregationRange> Ranges { get; set; }

	}
}
