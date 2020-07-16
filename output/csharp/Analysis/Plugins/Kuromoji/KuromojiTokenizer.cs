using Nest.Analysis;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class KuromojiTokenizer : TokenizerBase {
		
		[DataMember(Name="discard_punctuation")]
		public bool DiscardPunctuation { get; set; }


		[DataMember(Name="mode")]
		public KuromojiTokenizationMode Mode { get; set; }


		[DataMember(Name="nbest_cost")]
		public int NbestCost { get; set; }


		[DataMember(Name="nbest_examples")]
		public string NbestExamples { get; set; }


		[DataMember(Name="user_dictionary")]
		public string UserDictionary { get; set; }


		[DataMember(Name="user_dictionary_rules")]
		public List<string> UserDictionaryRules { get; set; }

	}
}
