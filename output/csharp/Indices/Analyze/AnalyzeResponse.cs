using Nest.Indices;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class AnalyzeResponse : IResponse {
		
		[DataMember(Name="detail")]
		public AnalyzeDetail Detail { get; set; }


		[DataMember(Name="tokens")]
		public List<AnalyzeToken> Tokens { get; set; }

	}
}
