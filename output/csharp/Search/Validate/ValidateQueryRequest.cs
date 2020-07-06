using Nest.Common;
using Nest.QueryDsl;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class ValidateQueryRequest : RequestBase {
		
		[DataMember(Name="allow_no_indices")]
		public bool AllowNoIndices { get; set; }


		[DataMember(Name="all_shards")]
		public bool AllShards { get; set; }


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


		[DataMember(Name="explain")]
		public bool Explain { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="lenient")]
		public bool Lenient { get; set; }


		[DataMember(Name="query_on_query_string")]
		public string QueryOnQueryString { get; set; }


		[DataMember(Name="rewrite")]
		public bool Rewrite { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }

	}
}
