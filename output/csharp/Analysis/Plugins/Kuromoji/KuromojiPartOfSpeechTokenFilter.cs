using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class KuromojiPartOfSpeechTokenFilter : TokenFilterBase {
		
		[DataMember(Name="stoptags")]
		public List<string> Stoptags { get; set; }

	}
}
