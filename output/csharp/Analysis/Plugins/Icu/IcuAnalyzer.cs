using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class IcuAnalyzer : AnalyzerBase {
		
		[DataMember(Name="method")]
		public IcuNormalizationType Method { get; set; }


		[DataMember(Name="mode")]
		public IcuNormalizationMode Mode { get; set; }

	}
}
