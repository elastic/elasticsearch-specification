using Nest.Search;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class Hit<TDocument>  {
		
		[DataMember(Name="_explanation")]
		public Explanation Explanation { get; set; }


		[DataMember(Name="fields")]
		public IDictionary<string, LazyDocument> Fields { get; set; }


		[DataMember(Name="highlight")]
		public IDictionary<string, List<string>> Highlight { get; set; }


		[DataMember(Name="inner_hits")]
		public IDictionary<string, InnerHitsResult> InnerHits { get; set; }


		[DataMember(Name="matched_queries")]
		public List<string> MatchedQueries { get; set; }


		[DataMember(Name="_nested")]
		public NestedIdentity Nested { get; set; }


		[DataMember(Name="_score")]
		public double Score { get; set; }


		[DataMember(Name="sort")]
		public List<object> Sort { get; set; }

	}
}
