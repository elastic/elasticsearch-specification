using Nest.QueryDsl;
using Nest.Aggregations;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class SignificantTermsAggregation  {
		
		[DataMember(Name="background_filter")]
		public QueryContainer BackgroundFilter { get; set; }


		[DataMember(Name="chi_square")]
		public ChiSquareHeuristic ChiSquare { get; set; }


		[DataMember(Name="exclude")]
		public IncludeExclude Exclude { get; set; }


		[DataMember(Name="execution_hint")]
		public TermsAggregationExecutionHint ExecutionHint { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="gnd")]
		public GoogleNormalizedDistanceHeuristic Gnd { get; set; }


		[DataMember(Name="include")]
		public IncludeExclude Include { get; set; }


		[DataMember(Name="min_doc_count")]
		public long MinDocCount { get; set; }


		[DataMember(Name="mutual_information")]
		public MutualInformationHeuristic MutualInformation { get; set; }


		[DataMember(Name="percentage")]
		public PercentageScoreHeuristic Percentage { get; set; }


		[DataMember(Name="script_heuristic")]
		public ScriptedHeuristic ScriptHeuristic { get; set; }


		[DataMember(Name="shard_min_doc_count")]
		public long ShardMinDocCount { get; set; }


		[DataMember(Name="shard_size")]
		public int ShardSize { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }

	}
}
