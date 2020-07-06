using Nest.Internal;
using Nest.Search;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class TermSuggester  {
		
		[DataMember(Name="lowercase_terms")]
		public bool LowercaseTerms { get; set; }


		[DataMember(Name="max_edits")]
		public int MaxEdits { get; set; }


		[DataMember(Name="max_inspections")]
		public int MaxInspections { get; set; }


		[DataMember(Name="max_term_freq")]
		public float MaxTermFreq { get; set; }


		[DataMember(Name="min_doc_freq")]
		public float MinDocFreq { get; set; }


		[DataMember(Name="min_word_length")]
		public int MinWordLength { get; set; }


		[DataMember(Name="prefix_length")]
		public int PrefixLength { get; set; }


		[DataMember(Name="shard_size")]
		public int ShardSize { get; set; }


		[DataMember(Name="sort")]
		public SuggestSort Sort { get; set; }


		[DataMember(Name="string_distance")]
		public StringDistance StringDistance { get; set; }


		[DataMember(Name="suggest_mode")]
		public SuggestMode SuggestMode { get; set; }


		[DataMember(Name="text")]
		public string Text { get; set; }

	}
}
