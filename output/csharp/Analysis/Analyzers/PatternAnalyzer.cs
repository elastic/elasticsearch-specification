using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class PatternAnalyzer : AnalyzerBase {
		
		[DataMember(Name="flags")]
		public string Flags { get; set; }


		[DataMember(Name="lowercase")]
		public bool Lowercase { get; set; }


		[DataMember(Name="pattern")]
		public string Pattern { get; set; }


		[DataMember(Name="stopwords")]
		public StopWords Stopwords { get; set; }

	}
}
