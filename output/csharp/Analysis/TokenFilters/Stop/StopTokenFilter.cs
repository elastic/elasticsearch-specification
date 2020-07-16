using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class StopTokenFilter : TokenFilterBase {
		
		[DataMember(Name="ignore_case")]
		public bool IgnoreCase { get; set; }


		[DataMember(Name="remove_trailing")]
		public bool RemoveTrailing { get; set; }


		[DataMember(Name="stopwords")]
		public StopWords Stopwords { get; set; }


		[DataMember(Name="stopwords_path")]
		public string StopwordsPath { get; set; }

	}
}
