using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class MatchPhraseQuery  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="query")]
		public string Query { get; set; }


		[DataMember(Name="slop")]
		public int Slop { get; set; }

	}
}
