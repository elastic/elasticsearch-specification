using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class UaxEmailUrlTokenizer : TokenizerBase {
		
		[DataMember(Name="max_token_length")]
		public int MaxTokenLength { get; set; }

	}
}
