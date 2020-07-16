using Nest.Internal;
using Nest.Common;
using Nest.Search;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class MultiSearchTemplateRequest : RequestBase {
		
		[DataMember(Name="ccs_minimize_roundtrips")]
		public bool CcsMinimizeRoundtrips { get; set; }


		[DataMember(Name="max_concurrent_searches")]
		public long MaxConcurrentSearches { get; set; }


		[DataMember(Name="search_type")]
		public SearchType SearchType { get; set; }


		[DataMember(Name="total_hits_as_integer")]
		public bool TotalHitsAsInteger { get; set; }


		[DataMember(Name="typed_keys")]
		public bool TypedKeys { get; set; }


		[DataMember(Name="operations")]
		public IDictionary<string, SearchTemplateRequest> Operations { get; set; }

	}
}
