using Nest.Common;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SearchTemplateRequest : RequestBase {
		
		[DataMember(Name="allow_no_indices")]
		public bool AllowNoIndices { get; set; }


		[DataMember(Name="ccs_minimize_roundtrips")]
		public bool CcsMinimizeRoundtrips { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="explain")]
		public bool Explain { get; set; }


		[DataMember(Name="ignore_throttled")]
		public bool IgnoreThrottled { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="preference")]
		public string Preference { get; set; }


		[DataMember(Name="profile")]
		public bool Profile { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="scroll")]
		public Time Scroll { get; set; }


		[DataMember(Name="search_type")]
		public SearchType SearchType { get; set; }


		[DataMember(Name="total_hits_as_integer")]
		public bool TotalHitsAsInteger { get; set; }


		[DataMember(Name="typed_keys")]
		public bool TypedKeys { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="params")]
		public IDictionary<string, object> Params { get; set; }


		[DataMember(Name="source")]
		public string Source { get; set; }

	}
}
