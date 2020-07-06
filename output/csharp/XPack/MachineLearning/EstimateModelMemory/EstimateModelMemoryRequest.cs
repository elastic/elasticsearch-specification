using Nest.XPack;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class EstimateModelMemoryRequest : RequestBase {
		
		[DataMember(Name="analysis_config")]
		public AnalysisConfig AnalysisConfig { get; set; }


		[DataMember(Name="max_bucket_cardinality")]
		public IDictionary<Field, long> MaxBucketCardinality { get; set; }


		[DataMember(Name="overall_cardinality")]
		public IDictionary<Field, long> OverallCardinality { get; set; }

	}
}
