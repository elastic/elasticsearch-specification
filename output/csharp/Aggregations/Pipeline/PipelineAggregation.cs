using Nest.Aggregations;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class PipelineAggregation  {
		
		[DataMember(Name="buckets_path")]
		public BucketsPath BucketsPath { get; set; }


		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="gap_policy")]
		public GapPolicy GapPolicy { get; set; }

	}
}
