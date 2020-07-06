using Nest.Search;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class PhraseSuggester  {
		
		[DataMember(Name="collate")]
		public PhraseSuggestCollate Collate { get; set; }


		[DataMember(Name="confidence")]
		public double Confidence { get; set; }


		[DataMember(Name="direct_generator")]
		public List<DirectGenerator> DirectGenerator { get; set; }


		[DataMember(Name="force_unigrams")]
		public bool ForceUnigrams { get; set; }


		[DataMember(Name="gram_size")]
		public int GramSize { get; set; }


		[DataMember(Name="highlight")]
		public PhraseSuggestHighlight Highlight { get; set; }


		[DataMember(Name="max_errors")]
		public double MaxErrors { get; set; }


		[DataMember(Name="real_word_error_likelihood")]
		public double RealWordErrorLikelihood { get; set; }


		[DataMember(Name="separator")]
		public string Separator { get; set; }


		[DataMember(Name="shard_size")]
		public int ShardSize { get; set; }


		[DataMember(Name="smoothing")]
		public SmoothingModelContainer Smoothing { get; set; }


		[DataMember(Name="text")]
		public string Text { get; set; }


		[DataMember(Name="token_limit")]
		public int TokenLimit { get; set; }

	}
}
