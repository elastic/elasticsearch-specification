using Nest.XPack;
using Nest.CommonOptions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Job  {
		
		[DataMember(Name="allow_lazy_open")]
		public bool AllowLazyOpen { get; set; }


		[DataMember(Name="analysis_config")]
		public AnalysisConfig AnalysisConfig { get; set; }


		[DataMember(Name="analysis_limits")]
		public AnalysisLimits AnalysisLimits { get; set; }


		[DataMember(Name="background_persist_interval")]
		public Time BackgroundPersistInterval { get; set; }


		[DataMember(Name="create_time")]
		public DateTimeOffset CreateTime { get; set; }


		[DataMember(Name="data_description")]
		public DataDescription DataDescription { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="finished_time")]
		public DateTimeOffset FinishedTime { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="job_type")]
		public string JobType { get; set; }


		[DataMember(Name="model_plot")]
		public ModelPlotConfig ModelPlot { get; set; }


		[DataMember(Name="model_snapshot_id")]
		public string ModelSnapshotId { get; set; }


		[DataMember(Name="model_snapshot_retention_days")]
		public long ModelSnapshotRetentionDays { get; set; }


		[DataMember(Name="renormalization_window_days")]
		public long RenormalizationWindowDays { get; set; }


		[DataMember(Name="results_index_name")]
		public string ResultsIndexName { get; set; }


		[DataMember(Name="results_retention_days")]
		public long ResultsRetentionDays { get; set; }

	}
}
