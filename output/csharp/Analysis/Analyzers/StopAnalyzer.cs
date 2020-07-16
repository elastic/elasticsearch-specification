using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class StopAnalyzer : AnalyzerBase {
		
		[DataMember(Name="stopwords")]
		public StopWords Stopwords { get; set; }


		[DataMember(Name="stopwords_path")]
		public string StopwordsPath { get; set; }

	}
}
