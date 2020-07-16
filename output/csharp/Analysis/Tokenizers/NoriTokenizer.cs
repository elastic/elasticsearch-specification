using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class NoriTokenizer : TokenizerBase {
		
		[DataMember(Name="decompound_mode")]
		public NoriDecompoundMode DecompoundMode { get; set; }


		[DataMember(Name="discard_punctuation")]
		public bool DiscardPunctuation { get; set; }


		[DataMember(Name="user_dictionary")]
		public string UserDictionary { get; set; }


		[DataMember(Name="user_dictionary_rules")]
		public List<string> UserDictionaryRules { get; set; }

	}
}
