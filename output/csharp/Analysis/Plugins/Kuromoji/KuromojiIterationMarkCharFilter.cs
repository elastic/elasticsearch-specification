using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class KuromojiIterationMarkCharFilter : CharFilterBase {
		
		[DataMember(Name="normalize_kana")]
		public bool NormalizeKana { get; set; }


		[DataMember(Name="normalize_kanji")]
		public bool NormalizeKanji { get; set; }

	}
}
