using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class NGramTokenFilter : TokenFilterBase {
		
		[DataMember(Name="max_gram")]
		public int MaxGram { get; set; }


		[DataMember(Name="min_gram")]
		public int MinGram { get; set; }

	}
}
