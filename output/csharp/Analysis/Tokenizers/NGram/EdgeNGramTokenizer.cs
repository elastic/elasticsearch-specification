using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class EdgeNGramTokenizer : TokenizerBase {
		
		[DataMember(Name="custom_token_chars")]
		public string CustomTokenChars { get; set; }


		[DataMember(Name="max_gram")]
		public int MaxGram { get; set; }


		[DataMember(Name="min_gram")]
		public int MinGram { get; set; }


		[DataMember(Name="token_chars")]
		public List<TokenChar> TokenChars { get; set; }

	}
}
