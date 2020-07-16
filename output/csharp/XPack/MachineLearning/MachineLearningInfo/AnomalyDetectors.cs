using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AnomalyDetectors  {
		
		[DataMember(Name="categorization_analyzer")]
		public CategorizationAnalyzer CategorizationAnalyzer { get; set; }


		[DataMember(Name="categorization_examples_limit")]
		public int CategorizationExamplesLimit { get; set; }


		[DataMember(Name="model_memory_limit")]
		public string ModelMemoryLimit { get; set; }


		[DataMember(Name="model_snapshot_retention_days")]
		public int ModelSnapshotRetentionDays { get; set; }

	}
}
