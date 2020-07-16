using Nest.XPack;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ValidateJobRequest : RequestBase {
		
		[DataMember(Name="analysis_config")]
		public AnalysisConfig AnalysisConfig { get; set; }


		[DataMember(Name="analysis_limits")]
		public AnalysisLimits AnalysisLimits { get; set; }


		[DataMember(Name="data_description")]
		public DataDescription DataDescription { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="model_plot")]
		public ModelPlotConfig ModelPlot { get; set; }


		[DataMember(Name="model_snapshot_retention_days")]
		public long ModelSnapshotRetentionDays { get; set; }


		[DataMember(Name="results_index_name")]
		public IndexName ResultsIndexName { get; set; }

	}
}
