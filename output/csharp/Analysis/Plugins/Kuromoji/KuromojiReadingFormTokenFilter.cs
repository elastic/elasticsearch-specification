using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class KuromojiReadingFormTokenFilter : TokenFilterBase {
		
		[DataMember(Name="use_romaji")]
		public bool UseRomaji { get; set; }

	}
}
