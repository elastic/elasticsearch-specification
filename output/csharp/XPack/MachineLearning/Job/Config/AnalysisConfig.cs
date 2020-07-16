using Nest.CommonOptions;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AnalysisConfig  {
		
		[DataMember(Name="bucket_span")]
		public Time BucketSpan { get; set; }


		[DataMember(Name="categorization_field_name")]
		public Field CategorizationFieldName { get; set; }


		[DataMember(Name="categorization_filters")]
		public List<string> CategorizationFilters { get; set; }


		[DataMember(Name="detectors")]
		public List<Detector> Detectors { get; set; }


		[DataMember(Name="influencers")]
		public List<Field> Influencers { get; set; }


		[DataMember(Name="latency")]
		public Time Latency { get; set; }


		[DataMember(Name="multivariate_by_fields")]
		public bool MultivariateByFields { get; set; }


		[DataMember(Name="summary_count_field_name")]
		public Field SummaryCountFieldName { get; set; }

	}
}
