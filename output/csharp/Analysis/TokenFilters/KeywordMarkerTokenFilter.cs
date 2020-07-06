using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class KeywordMarkerTokenFilter : TokenFilterBase {
		
		[DataMember(Name="ignore_case")]
		public bool IgnoreCase { get; set; }


		[DataMember(Name="keywords")]
		public List<string> Keywords { get; set; }


		[DataMember(Name="keywords_path")]
		public string KeywordsPath { get; set; }


		[DataMember(Name="keywords_pattern")]
		public string KeywordsPattern { get; set; }

	}
}
