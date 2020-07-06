using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class DirectGenerator  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="max_edits")]
		public int MaxEdits { get; set; }


		[DataMember(Name="max_inspections")]
		public float MaxInspections { get; set; }


		[DataMember(Name="max_term_freq")]
		public float MaxTermFreq { get; set; }


		[DataMember(Name="min_doc_freq")]
		public float MinDocFreq { get; set; }


		[DataMember(Name="min_word_length")]
		public int MinWordLength { get; set; }


		[DataMember(Name="post_filter")]
		public string PostFilter { get; set; }


		[DataMember(Name="pre_filter")]
		public string PreFilter { get; set; }


		[DataMember(Name="prefix_length")]
		public int PrefixLength { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }


		[DataMember(Name="suggest_mode")]
		public SuggestMode SuggestMode { get; set; }

	}
}
