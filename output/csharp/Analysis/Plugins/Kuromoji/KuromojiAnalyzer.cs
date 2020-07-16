using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class KuromojiAnalyzer : AnalyzerBase {
		
		[DataMember(Name="mode")]
		public KuromojiTokenizationMode Mode { get; set; }


		[DataMember(Name="user_dictionary")]
		public string UserDictionary { get; set; }

	}
}
