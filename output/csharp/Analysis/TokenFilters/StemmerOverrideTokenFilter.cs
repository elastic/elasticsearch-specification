using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class StemmerOverrideTokenFilter : TokenFilterBase {
		
		[DataMember(Name="rules")]
		public List<string> Rules { get; set; }


		[DataMember(Name="rules_path")]
		public string RulesPath { get; set; }

	}
}
