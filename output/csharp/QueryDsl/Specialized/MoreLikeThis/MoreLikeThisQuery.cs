using Nest.Internal;
using Nest.CommonAbstractions;
using Nest.QueryDsl;
using Nest.CommonOptions;
using Nest.Analysis;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class MoreLikeThisQuery  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="boost_terms")]
		public double BoostTerms { get; set; }


		[DataMember(Name="fields")]
		public List<Field> Fields { get; set; }


		[DataMember(Name="include")]
		public bool Include { get; set; }


		[DataMember(Name="like")]
		public List<Like> Like { get; set; }


		[DataMember(Name="max_doc_freq")]
		public int MaxDocFreq { get; set; }


		[DataMember(Name="max_query_terms")]
		public int MaxQueryTerms { get; set; }


		[DataMember(Name="max_word_length")]
		public int MaxWordLength { get; set; }


		[DataMember(Name="min_doc_freq")]
		public int MinDocFreq { get; set; }


		[DataMember(Name="minimum_should_match")]
		public MinimumShouldMatch MinimumShouldMatch { get; set; }


		[DataMember(Name="min_term_freq")]
		public int MinTermFreq { get; set; }


		[DataMember(Name="min_word_length")]
		public int MinWordLength { get; set; }


		[DataMember(Name="per_field_analyzer")]
		public IDictionary<Field, string> PerFieldAnalyzer { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="stop_words")]
		public StopWords StopWords { get; set; }


		[DataMember(Name="unlike")]
		public List<Like> Unlike { get; set; }


		[DataMember(Name="version")]
		public long Version { get; set; }


		[DataMember(Name="version_type")]
		public VersionType VersionType { get; set; }

	}
}
