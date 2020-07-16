using Nest.Search;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class QueryProfile  {
		
		[DataMember(Name="breakdown")]
		public QueryBreakdown Breakdown { get; set; }


		[DataMember(Name="children")]
		public List<QueryProfile> Children { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="time_in_nanos")]
		public long TimeInNanos { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
