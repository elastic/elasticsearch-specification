using Nest.Search;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class AggregationProfile  {
		
		[DataMember(Name="breakdown")]
		public AggregationBreakdown Breakdown { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="time_in_nanos")]
		public long TimeInNanos { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
