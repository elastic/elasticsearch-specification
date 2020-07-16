using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class QueryStringQuery  {
		
		[DataMember(Name="allow_leading_wildcard")]
		public bool AllowLeadingWildcard { get; set; }


		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="analyze_wildcard")]
		public bool AnalyzeWildcard { get; set; }


		[DataMember(Name="auto_generate_synonyms_phrase_query")]
		public bool AutoGenerateSynonymsPhraseQuery { get; set; }


		[DataMember(Name="default_field")]
		public Field DefaultField { get; set; }


		[DataMember(Name="default_operator")]
		public Operator DefaultOperator { get; set; }


		[DataMember(Name="enable_position_increments")]
		public bool EnablePositionIncrements { get; set; }


		[DataMember(Name="escape")]
		public bool Escape { get; set; }


		[DataMember(Name="fields")]
		public List<Field> Fields { get; set; }


		[DataMember(Name="fuzziness")]
		public Fuzziness Fuzziness { get; set; }


		[DataMember(Name="fuzzy_max_expansions")]
		public int FuzzyMaxExpansions { get; set; }


		[DataMember(Name="fuzzy_prefix_length")]
		public int FuzzyPrefixLength { get; set; }


		[DataMember(Name="fuzzy_rewrite")]
		public MultiTermQueryRewrite FuzzyRewrite { get; set; }


		[DataMember(Name="fuzzy_transpositions")]
		public bool FuzzyTranspositions { get; set; }


		[DataMember(Name="lenient")]
		public bool Lenient { get; set; }


		[DataMember(Name="max_determinized_states")]
		public int MaxDeterminizedStates { get; set; }


		[DataMember(Name="minimum_should_match")]
		public MinimumShouldMatch MinimumShouldMatch { get; set; }


		[DataMember(Name="phrase_slop")]
		public double PhraseSlop { get; set; }


		[DataMember(Name="query")]
		public string Query { get; set; }


		[DataMember(Name="quote_analyzer")]
		public string QuoteAnalyzer { get; set; }


		[DataMember(Name="quote_field_suffix")]
		public string QuoteFieldSuffix { get; set; }


		[DataMember(Name="rewrite")]
		public MultiTermQueryRewrite Rewrite { get; set; }


		[DataMember(Name="tie_breaker")]
		public double TieBreaker { get; set; }


		[DataMember(Name="time_zone")]
		public string TimeZone { get; set; }


		[DataMember(Name="type")]
		public TextQueryType Type { get; set; }

	}
}
