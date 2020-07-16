using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class AnalyzerBase  {
		
		[DataMember(Name="type")]
		public string Type { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
