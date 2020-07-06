using Nest.Common;
using Nest.Internal;
using Nest.CommonAbstractions;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class CountRequest : RequestBase {
		
		[DataMember(Name="allow_no_indices")]
		public bool AllowNoIndices { get; set; }


		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="analyze_wildcard")]
		public bool AnalyzeWildcard { get; set; }


		[DataMember(Name="default_operator")]
		public DefaultOperator DefaultOperator { get; set; }


		[DataMember(Name="df")]
		public string Df { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="ignore_throttled")]
		public bool IgnoreThrottled { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="lenient")]
		public bool Lenient { get; set; }


		[DataMember(Name="min_score")]
		public double MinScore { get; set; }


		[DataMember(Name="preference")]
		public string Preference { get; set; }


		[DataMember(Name="query_on_query_string")]
		public string QueryOnQueryString { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="terminate_after")]
		public long TerminateAfter { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }

	}
}
