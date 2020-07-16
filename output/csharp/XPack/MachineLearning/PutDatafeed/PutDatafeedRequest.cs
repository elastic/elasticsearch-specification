using Nest.Common;
using Nest.Aggregations;
using Nest.XPack;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutDatafeedRequest : RequestBase {
		
		[DataMember(Name="allow_no_indices")]
		public bool AllowNoIndices { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="ignore_throttled")]
		public bool IgnoreThrottled { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="aggregations")]
		public IDictionary<string, AggregationContainer> Aggregations { get; set; }


		[DataMember(Name="chunking_config")]
		public ChunkingConfig ChunkingConfig { get; set; }


		[DataMember(Name="frequency")]
		public Time Frequency { get; set; }


		[DataMember(Name="indices")]
		public IndicesNames Indices { get; set; }


		[DataMember(Name="job_id")]
		public Id JobId { get; set; }


		[DataMember(Name="max_empty_searches")]
		public int MaxEmptySearches { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="query_delay")]
		public Time QueryDelay { get; set; }


		[DataMember(Name="script_fields")]
		public IDictionary<string, ScriptField> ScriptFields { get; set; }


		[DataMember(Name="scroll_size")]
		public int ScrollSize { get; set; }

	}
}
