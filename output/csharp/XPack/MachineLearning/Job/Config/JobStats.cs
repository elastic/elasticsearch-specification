using Nest.XPack;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class JobStats  {
		
		[DataMember(Name="assignment_explanation")]
		public string AssignmentExplanation { get; set; }


		[DataMember(Name="data_counts")]
		public DataCounts DataCounts { get; set; }


		[DataMember(Name="forecasts_stats")]
		public JobForecastStatistics ForecastsStats { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="model_size_stats")]
		public ModelSizeStats ModelSizeStats { get; set; }


		[DataMember(Name="node")]
		public DiscoveryNode Node { get; set; }


		[DataMember(Name="open_time")]
		public Time OpenTime { get; set; }


		[DataMember(Name="state")]
		public JobState State { get; set; }


		[DataMember(Name="timing_stats")]
		public TimingStats TimingStats { get; set; }

	}
}
