using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class LanguageAnalyzer : AnalyzerBase {
		
		[DataMember(Name="language")]
		public Language Language { get; set; }


		[DataMember(Name="stem_exclusion")]
		public List<string> StemExclusion { get; set; }


		[DataMember(Name="stopwords")]
		public StopWords Stopwords { get; set; }


		[DataMember(Name="stopwords_path")]
		public string StopwordsPath { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
