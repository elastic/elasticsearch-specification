using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CategorizationAnalyzer  {
		
		[DataMember(Name="filter")]
		public List<ITokenFilter> Filter { get; set; }


		[DataMember(Name="tokenizer")]
		public string Tokenizer { get; set; }

	}
}
