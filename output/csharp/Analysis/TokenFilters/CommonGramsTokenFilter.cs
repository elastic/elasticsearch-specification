using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class CommonGramsTokenFilter : TokenFilterBase {
		
		[DataMember(Name="common_words")]
		public List<string> CommonWords { get; set; }


		[DataMember(Name="common_words_path")]
		public string CommonWordsPath { get; set; }


		[DataMember(Name="ignore_case")]
		public bool IgnoreCase { get; set; }


		[DataMember(Name="query_mode")]
		public bool QueryMode { get; set; }

	}
}
