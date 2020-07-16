using Nest.Aggregations;
using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TransformPivot  {
		
		[DataMember(Name="aggregations")]
		public IDictionary<string, AggregationContainer> Aggregations { get; set; }


		[DataMember(Name="group_by")]
		public IDictionary<string, SingleGroupSource> GroupBy { get; set; }


		[DataMember(Name="max_page_search_size")]
		public int MaxPageSearchSize { get; set; }

	}
}
