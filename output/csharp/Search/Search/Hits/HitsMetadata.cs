using Nest.Search;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class HitsMetadata<T>  {
		
		[DataMember(Name="hits")]
		public List<Hit<T>> Hits { get; set; }


		[DataMember(Name="max_score")]
		public double MaxScore { get; set; }


		[DataMember(Name="total")]
		public TotalHits Total { get; set; }

	}
}
