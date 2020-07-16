using Nest.Aggregations;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class TermsAggregation  {
		
		[DataMember(Name="collect_mode")]
		public TermsAggregationCollectMode CollectMode { get; set; }


		[DataMember(Name="exclude")]
		public TermsExclude Exclude { get; set; }


		[DataMember(Name="execution_hint")]
		public TermsAggregationExecutionHint ExecutionHint { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="include")]
		public TermsInclude Include { get; set; }


		[DataMember(Name="min_doc_count")]
		public int MinDocCount { get; set; }


		[DataMember(Name="missing")]
		public object Missing { get; set; }


		[DataMember(Name="order")]
		public List<TermsOrder> Order { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }


		[DataMember(Name="shard_size")]
		public int ShardSize { get; set; }


		[DataMember(Name="show_term_doc_count_error")]
		public bool ShowTermDocCountError { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }

	}
}
