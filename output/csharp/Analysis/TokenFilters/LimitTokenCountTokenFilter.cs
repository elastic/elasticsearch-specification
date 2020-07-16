using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class LimitTokenCountTokenFilter : TokenFilterBase {
		
		[DataMember(Name="consume_all_tokens")]
		public bool ConsumeAllTokens { get; set; }


		[DataMember(Name="max_token_count")]
		public int MaxTokenCount { get; set; }

	}
}
