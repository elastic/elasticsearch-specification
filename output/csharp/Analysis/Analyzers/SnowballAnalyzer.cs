using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class SnowballAnalyzer : AnalyzerBase {
		
		[DataMember(Name="language")]
		public SnowballLanguage Language { get; set; }


		[DataMember(Name="stopwords")]
		public StopWords Stopwords { get; set; }

	}
}
