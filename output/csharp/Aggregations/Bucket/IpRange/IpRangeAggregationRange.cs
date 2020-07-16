using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class IpRangeAggregationRange  {
		
		[DataMember(Name="from")]
		public string From { get; set; }


		[DataMember(Name="mask")]
		public string Mask { get; set; }


		[DataMember(Name="to")]
		public string To { get; set; }

	}
}
