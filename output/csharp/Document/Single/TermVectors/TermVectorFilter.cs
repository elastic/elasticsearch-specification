using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class TermVectorFilter  {
		
		[DataMember(Name="max_doc_freq")]
		public int MaxDocFreq { get; set; }


		[DataMember(Name="max_num_terms")]
		public int MaxNumTerms { get; set; }


		[DataMember(Name="max_term_freq")]
		public int MaxTermFreq { get; set; }


		[DataMember(Name="max_word_length")]
		public int MaxWordLength { get; set; }


		[DataMember(Name="min_doc_freq")]
		public int MinDocFreq { get; set; }


		[DataMember(Name="min_term_freq")]
		public int MinTermFreq { get; set; }


		[DataMember(Name="min_word_length")]
		public int MinWordLength { get; set; }

	}
}
