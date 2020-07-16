using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class FuzzyQuery  {
		
		[DataMember(Name="max_expansions")]
		public int MaxExpansions { get; set; }


		[DataMember(Name="prefix_length")]
		public int PrefixLength { get; set; }


		[DataMember(Name="rewrite")]
		public MultiTermQueryRewrite Rewrite { get; set; }


		[DataMember(Name="transpositions")]
		public bool Transpositions { get; set; }

	}
}
