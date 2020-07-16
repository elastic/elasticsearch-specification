using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class SnowballTokenFilter : TokenFilterBase {
		
		[DataMember(Name="language")]
		public SnowballLanguage Language { get; set; }

	}
}
