using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class LowercaseTokenFilter : TokenFilterBase {
		
		[DataMember(Name="language")]
		public string Language { get; set; }

	}
}
