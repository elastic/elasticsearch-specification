using Nest.QueryDsl;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class SimpleQueryStringQuery  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="analyze_wildcard")]
		public bool AnalyzeWildcard { get; set; }


		[DataMember(Name="auto_generate_synonyms_phrase_query")]
		public bool AutoGenerateSynonymsPhraseQuery { get; set; }


		[DataMember(Name="default_operator")]
		public Operator DefaultOperator { get; set; }


		[DataMember(Name="fields")]
		public List<Field> Fields { get; set; }


		[DataMember(Name="flags")]
		public SimpleQueryStringFlags Flags { get; set; }


		[DataMember(Name="fuzzy_max_expansions")]
		public int FuzzyMaxExpansions { get; set; }


		[DataMember(Name="fuzzy_prefix_length")]
		public int FuzzyPrefixLength { get; set; }


		[DataMember(Name="fuzzy_transpositions")]
		public bool FuzzyTranspositions { get; set; }


		[DataMember(Name="lenient")]
		public bool Lenient { get; set; }


		[DataMember(Name="minimum_should_match")]
		public MinimumShouldMatch MinimumShouldMatch { get; set; }


		[DataMember(Name="query")]
		public string Query { get; set; }


		[DataMember(Name="quote_field_suffix")]
		public string QuoteFieldSuffix { get; set; }

	}
}
