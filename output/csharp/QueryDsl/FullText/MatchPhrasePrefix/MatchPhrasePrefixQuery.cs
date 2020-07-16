using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class MatchPhrasePrefixQuery  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="max_expansions")]
		public int MaxExpansions { get; set; }


		[DataMember(Name="query")]
		public string Query { get; set; }


		[DataMember(Name="slop")]
		public int Slop { get; set; }


		[DataMember(Name="zero_terms_query")]
		public ZeroTermsQuery ZeroTermsQuery { get; set; }

	}
}
