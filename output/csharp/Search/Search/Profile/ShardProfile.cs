using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class ShardProfile  {
		
		[DataMember(Name="aggregations")]
		public List<AggregationProfile> Aggregations { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="searches")]
		public List<SearchProfile> Searches { get; set; }

	}
}
