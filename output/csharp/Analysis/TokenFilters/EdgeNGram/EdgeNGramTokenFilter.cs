using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class EdgeNGramTokenFilter : TokenFilterBase {
		
		[DataMember(Name="max_gram")]
		public int MaxGram { get; set; }


		[DataMember(Name="min_gram")]
		public int MinGram { get; set; }


		[DataMember(Name="side")]
		public EdgeNGramSide Side { get; set; }

	}
}
