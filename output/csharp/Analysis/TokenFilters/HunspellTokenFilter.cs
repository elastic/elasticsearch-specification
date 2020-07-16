using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class HunspellTokenFilter : TokenFilterBase {
		
		[DataMember(Name="dedup")]
		public bool Dedup { get; set; }


		[DataMember(Name="dictionary")]
		public string Dictionary { get; set; }


		[DataMember(Name="locale")]
		public string Locale { get; set; }


		[DataMember(Name="longest_only")]
		public bool LongestOnly { get; set; }

	}
}
