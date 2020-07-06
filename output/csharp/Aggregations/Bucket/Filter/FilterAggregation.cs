using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class FilterAggregation  {
		
		[DataMember(Name="filter")]
		public QueryContainer Filter { get; set; }

	}
}
