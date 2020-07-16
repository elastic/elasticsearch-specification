using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class IcuTokenizer : TokenizerBase {
		
		[DataMember(Name="rule_files")]
		public string RuleFiles { get; set; }

	}
}
