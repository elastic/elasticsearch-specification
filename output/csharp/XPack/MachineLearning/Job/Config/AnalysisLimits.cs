using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AnalysisLimits  {
		
		[DataMember(Name="categorization_examples_limit")]
		public long CategorizationExamplesLimit { get; set; }


		[DataMember(Name="model_memory_limit")]
		public string ModelMemoryLimit { get; set; }

	}
}
