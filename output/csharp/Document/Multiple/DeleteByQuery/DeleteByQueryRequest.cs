using Nest.Common;
using Nest.Internal;
using Nest.CommonAbstractions;
using Nest.CommonOptions;
using Nest.QueryDsl;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class DeleteByQueryRequest : RequestBase {
		
		[DataMember(Name="allow_no_indices")]
		public bool AllowNoIndices { get; set; }


		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="analyze_wildcard")]
		public bool AnalyzeWildcard { get; set; }


		[DataMember(Name="conflicts")]
		public Conflicts Conflicts { get; set; }


		[DataMember(Name="default_operator")]
		public DefaultOperator DefaultOperator { get; set; }


		[DataMember(Name="df")]
		public string Df { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="from")]
		public long From { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="lenient")]
		public bool Lenient { get; set; }


		[DataMember(Name="preference")]
		public string Preference { get; set; }


		[DataMember(Name="query_on_query_string")]
		public string QueryOnQueryString { get; set; }


		[DataMember(Name="refresh")]
		public bool Refresh { get; set; }


		[DataMember(Name="request_cache")]
		public bool RequestCache { get; set; }


		[DataMember(Name="requests_per_second")]
		public long RequestsPerSecond { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="scroll")]
		public Time Scroll { get; set; }


		[DataMember(Name="scroll_size")]
		public long ScrollSize { get; set; }


		[DataMember(Name="search_timeout")]
		public Time SearchTimeout { get; set; }


		[DataMember(Name="search_type")]
		public SearchType SearchType { get; set; }


		[DataMember(Name="size")]
		public long Size { get; set; }


		[DataMember(Name="slices")]
		public long Slices { get; set; }


		[DataMember(Name="sort")]
		public List<string> Sort { get; set; }


		[DataMember(Name="source_enabled")]
		public bool SourceEnabled { get; set; }


		[DataMember(Name="source_excludes")]
		public List<Field> SourceExcludes { get; set; }


		[DataMember(Name="source_includes")]
		public List<Field> SourceIncludes { get; set; }


		[DataMember(Name="stats")]
		public List<string> Stats { get; set; }


		[DataMember(Name="terminate_after")]
		public long TerminateAfter { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="version")]
		public bool Version { get; set; }


		[DataMember(Name="wait_for_active_shards")]
		public string WaitForActiveShards { get; set; }


		[DataMember(Name="wait_for_completion")]
		public bool WaitForCompletion { get; set; }


		[DataMember(Name="max_docs")]
		public long MaxDocs { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="slice")]
		public SlicedScroll Slice { get; set; }

	}
}
