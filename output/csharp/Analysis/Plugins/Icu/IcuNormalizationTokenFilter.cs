using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class IcuNormalizationTokenFilter : TokenFilterBase {
		
		[DataMember(Name="name")]
		public IcuNormalizationType Name { get; set; }

	}
}
