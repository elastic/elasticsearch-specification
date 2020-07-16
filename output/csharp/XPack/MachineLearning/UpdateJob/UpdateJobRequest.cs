using Nest.XPack;
using Nest.CommonOptions;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class UpdateJobRequest : RequestBase {
		
		[DataMember(Name="allow_lazy_open")]
		public bool AllowLazyOpen { get; set; }


		[DataMember(Name="analysis_limits")]
		public AnalysisMemoryLimit AnalysisLimits { get; set; }


		[DataMember(Name="background_persist_interval")]
		public Time BackgroundPersistInterval { get; set; }


		[DataMember(Name="custom_settings")]
		public IDictionary<string, object> CustomSettings { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="model_plot_config")]
		public ModelPlotConfigEnabled ModelPlotConfig { get; set; }


		[DataMember(Name="model_snapshot_retention_days")]
		public long ModelSnapshotRetentionDays { get; set; }


		[DataMember(Name="renormalization_window_days")]
		public long RenormalizationWindowDays { get; set; }


		[DataMember(Name="results_retention_days")]
		public long ResultsRetentionDays { get; set; }

	}
}
