using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class FingerprintAnalyzer : AnalyzerBase {
		
		[DataMember(Name="max_output_size")]
		public int MaxOutputSize { get; set; }


		[DataMember(Name="preserve_original")]
		public bool PreserveOriginal { get; set; }


		[DataMember(Name="separator")]
		public string Separator { get; set; }


		[DataMember(Name="stopwords")]
		public StopWords Stopwords { get; set; }


		[DataMember(Name="stopwords_path")]
		public string StopwordsPath { get; set; }

	}
}
