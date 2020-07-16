using Nest.Internal;
using Nest.Common;
using Nest.CommonAbstractions;
using Nest.CommonOptions;
using Nest.Aggregations;
using Nest.Search;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SearchRequest : RequestBase {
		
		[DataMember(Name="allow_no_indices")]
		public bool AllowNoIndices { get; set; }


		[DataMember(Name="allow_partial_search_results")]
		public bool AllowPartialSearchResults { get; set; }


		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="analyze_wildcard")]
		public bool AnalyzeWildcard { get; set; }


		[DataMember(Name="batched_reduce_size")]
		public long BatchedReduceSize { get; set; }


		[DataMember(Name="ccs_minimize_roundtrips")]
		public bool CcsMinimizeRoundtrips { get; set; }


		[DataMember(Name="default_operator")]
		public DefaultOperator DefaultOperator { get; set; }


		[DataMember(Name="df")]
		public string Df { get; set; }


		[DataMember(Name="docvalue_fields")]
		public List<Field> DocvalueFields { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="ignore_throttled")]
		public bool IgnoreThrottled { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="lenient")]
		public bool Lenient { get; set; }


		[DataMember(Name="max_concurrent_shard_requests")]
		public long MaxConcurrentShardRequests { get; set; }


		[DataMember(Name="preference")]
		public string Preference { get; set; }


		[DataMember(Name="pre_filter_shard_size")]
		public long PreFilterShardSize { get; set; }


		[DataMember(Name="query_on_query_string")]
		public string QueryOnQueryString { get; set; }


		[DataMember(Name="request_cache")]
		public bool RequestCache { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="scroll")]
		public Time Scroll { get; set; }


		[DataMember(Name="search_type")]
		public SearchType SearchType { get; set; }


		[DataMember(Name="sequence_number_primary_term")]
		public bool SequenceNumberPrimaryTerm { get; set; }


		[DataMember(Name="stats")]
		public List<string> Stats { get; set; }


		[DataMember(Name="stored_fields")]
		public List<Field> StoredFields { get; set; }


		[DataMember(Name="suggest_field")]
		public Field SuggestField { get; set; }


		[DataMember(Name="suggest_mode")]
		public SuggestMode SuggestMode { get; set; }


		[DataMember(Name="suggest_size")]
		public long SuggestSize { get; set; }


		[DataMember(Name="suggest_text")]
		public string SuggestText { get; set; }


		[DataMember(Name="total_hits_as_integer")]
		public bool TotalHitsAsInteger { get; set; }


		[DataMember(Name="track_total_hits")]
		public bool TrackTotalHits { get; set; }


		[DataMember(Name="typed_keys")]
		public bool TypedKeys { get; set; }


		[DataMember(Name="aggs")]
		public IDictionary<string, AggregationContainer> Aggs { get; set; }


		[DataMember(Name="collapse")]
		public FieldCollapse Collapse { get; set; }


		[DataMember(Name="explain")]
		public bool Explain { get; set; }


		[DataMember(Name="from")]
		public int From { get; set; }


		[DataMember(Name="highlight")]
		public Highlight Highlight { get; set; }


		[DataMember(Name="indices_boost")]
		public IDictionary<IndexName, double> IndicesBoost { get; set; }


		[DataMember(Name="min_score")]
		public double MinScore { get; set; }


		[DataMember(Name="post_filter")]
		public QueryContainer PostFilter { get; set; }


		[DataMember(Name="profile")]
		public bool Profile { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="rescore")]
		public List<Rescore> Rescore { get; set; }


		[DataMember(Name="script_fields")]
		public IDictionary<string, ScriptField> ScriptFields { get; set; }


		[DataMember(Name="search_after")]
		public List<object> SearchAfter { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }


		[DataMember(Name="slice")]
		public SlicedScroll Slice { get; set; }


		[DataMember(Name="sort")]
		public List<Sort> Sort { get; set; }


		[DataMember(Name="_source")]
		public Union<bool, SourceFilter> Source { get; set; }


		[DataMember(Name="suggest")]
		public IDictionary<string, SuggestBucket> Suggest { get; set; }


		[DataMember(Name="terminate_after")]
		public long TerminateAfter { get; set; }


		[DataMember(Name="timeout")]
		public string Timeout { get; set; }


		[DataMember(Name="track_scores")]
		public bool TrackScores { get; set; }


		[DataMember(Name="version")]
		public bool Version { get; set; }

	}
}
