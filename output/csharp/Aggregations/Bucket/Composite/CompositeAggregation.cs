using Nest.Internal;
using Nest.Aggregations;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class CompositeAggregation  {
		
		[DataMember(Name="after")]
		public IDictionary<string, object> After { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }


		[DataMember(Name="sources")]
		public List<CompositeAggregationSource> Sources { get; set; }

	}
}
