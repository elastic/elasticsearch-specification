using Nest.Internal;
using Nest.Aggregations;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class BucketSortAggregation  {
		
		[DataMember(Name="from")]
		public int From { get; set; }


		[DataMember(Name="gap_policy")]
		public GapPolicy GapPolicy { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }


		[DataMember(Name="sort")]
		public List<Sort> Sort { get; set; }

	}
}
