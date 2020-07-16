using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class AdjacencyMatrixAggregation  {
		
		[DataMember(Name="filters")]
		public IDictionary<string, QueryContainer> Filters { get; set; }

	}
}
