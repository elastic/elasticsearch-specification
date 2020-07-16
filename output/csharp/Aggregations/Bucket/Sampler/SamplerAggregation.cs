using Nest.Aggregations;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class SamplerAggregation  {
		
		[DataMember(Name="execution_hint")]
		public SamplerAggregationExecutionHint ExecutionHint { get; set; }


		[DataMember(Name="max_docs_per_value")]
		public int MaxDocsPerValue { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }


		[DataMember(Name="shard_size")]
		public int ShardSize { get; set; }

	}
}
