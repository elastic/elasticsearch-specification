using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class AnalyzeDetail  {
		
		[DataMember(Name="charfilters")]
		public List<CharFilterDetail> Charfilters { get; set; }


		[DataMember(Name="custom_analyzer")]
		public bool CustomAnalyzer { get; set; }


		[DataMember(Name="tokenfilters")]
		public List<TokenDetail> Tokenfilters { get; set; }


		[DataMember(Name="tokenizer")]
		public TokenDetail Tokenizer { get; set; }

	}
}
