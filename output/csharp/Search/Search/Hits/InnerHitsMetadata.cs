using Nest.Search;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class InnerHitsMetadata  {
		
		[DataMember(Name="hits")]
		public List<Hit<LazyDocument>> Hits { get; set; }


		[DataMember(Name="max_score")]
		public double MaxScore { get; set; }


		[DataMember(Name="total")]
		public TotalHits Total { get; set; }

	}
}
