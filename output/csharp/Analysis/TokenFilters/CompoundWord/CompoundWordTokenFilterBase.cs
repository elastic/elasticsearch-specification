using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class CompoundWordTokenFilterBase : TokenFilterBase {
		
		[DataMember(Name="hyphenation_patterns_path")]
		public string HyphenationPatternsPath { get; set; }


		[DataMember(Name="max_subword_size")]
		public int MaxSubwordSize { get; set; }


		[DataMember(Name="min_subword_size")]
		public int MinSubwordSize { get; set; }


		[DataMember(Name="min_word_size")]
		public int MinWordSize { get; set; }


		[DataMember(Name="only_longest_match")]
		public bool OnlyLongestMatch { get; set; }


		[DataMember(Name="word_list")]
		public List<string> WordList { get; set; }


		[DataMember(Name="word_list_path")]
		public string WordListPath { get; set; }

	}
}
