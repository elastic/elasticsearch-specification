using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AnalysisMemoryLimit  {
		
		[DataMember(Name="model_memory_limit")]
		public string ModelMemoryLimit { get; set; }

	}
}
