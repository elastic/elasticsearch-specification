using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class KuromojiStemmerTokenFilter : TokenFilterBase {
		
		[DataMember(Name="minimum_length")]
		public int MinimumLength { get; set; }

	}
}
