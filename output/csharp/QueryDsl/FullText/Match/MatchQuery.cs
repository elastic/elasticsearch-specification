using Nest.Internal;
using Nest.CommonOptions;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class MatchQuery  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="auto_generate_synonyms_phrase_query")]
		public bool AutoGenerateSynonymsPhraseQuery { get; set; }


		[DataMember(Name="cutoff_frequency")]
		public double CutoffFrequency { get; set; }


		[DataMember(Name="fuzziness")]
		public Fuzziness Fuzziness { get; set; }


		[DataMember(Name="fuzzy_rewrite")]
		public MultiTermQueryRewrite FuzzyRewrite { get; set; }


		[DataMember(Name="fuzzy_transpositions")]
		public bool FuzzyTranspositions { get; set; }


		[DataMember(Name="lenient")]
		public bool Lenient { get; set; }


		[DataMember(Name="max_expansions")]
		public int MaxExpansions { get; set; }


		[DataMember(Name="minimum_should_match")]
		public MinimumShouldMatch MinimumShouldMatch { get; set; }


		[DataMember(Name="operator")]
		public Operator Operator { get; set; }


		[DataMember(Name="prefix_length")]
		public int PrefixLength { get; set; }


		[DataMember(Name="query")]
		public string Query { get; set; }


		[DataMember(Name="zero_terms_query")]
		public ZeroTermsQuery ZeroTermsQuery { get; set; }

	}
}
