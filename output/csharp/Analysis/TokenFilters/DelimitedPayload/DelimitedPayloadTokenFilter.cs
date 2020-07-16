using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class DelimitedPayloadTokenFilter : TokenFilterBase {
		
		[DataMember(Name="delimiter")]
		public string Delimiter { get; set; }


		[DataMember(Name="encoding")]
		public DelimitedPayloadEncoding Encoding { get; set; }

	}
}
