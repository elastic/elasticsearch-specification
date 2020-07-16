using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class KeepWordsTokenFilter : TokenFilterBase {
		
		[DataMember(Name="keep_words")]
		public List<string> KeepWords { get; set; }


		[DataMember(Name="keep_words_case")]
		public bool KeepWordsCase { get; set; }


		[DataMember(Name="keep_words_path")]
		public string KeepWordsPath { get; set; }

	}
}
