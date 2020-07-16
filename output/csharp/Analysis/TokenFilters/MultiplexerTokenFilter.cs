using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class MultiplexerTokenFilter : TokenFilterBase {
		
		[DataMember(Name="filters")]
		public List<string> Filters { get; set; }


		[DataMember(Name="preserve_original")]
		public bool PreserveOriginal { get; set; }

	}
}
