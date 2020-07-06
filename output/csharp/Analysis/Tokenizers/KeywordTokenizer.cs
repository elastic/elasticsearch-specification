using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class KeywordTokenizer : TokenizerBase {
		
		[DataMember(Name="buffer_size")]
		public int BufferSize { get; set; }

	}
}
