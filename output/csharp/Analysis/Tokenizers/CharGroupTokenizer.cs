using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class CharGroupTokenizer : TokenizerBase {
		
		[DataMember(Name="tokenize_on_chars")]
		public List<string> TokenizeOnChars { get; set; }

	}
}
