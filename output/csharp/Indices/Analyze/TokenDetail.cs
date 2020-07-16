using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class TokenDetail  {
		
		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="tokens")]
		public List<ExplainAnalyzeToken> Tokens { get; set; }

	}
}
