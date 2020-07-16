using Nest.CommonOptions;
using Nest.QueryDsl;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class MatchBoolPrefixQuery  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="fuzziness")]
		public Fuzziness Fuzziness { get; set; }


		[DataMember(Name="fuzzy_rewrite")]
		public MultiTermQueryRewrite FuzzyRewrite { get; set; }


		[DataMember(Name="fuzzy_transpositions")]
		public bool FuzzyTranspositions { get; set; }


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

	}
}
