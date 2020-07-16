using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class FingerprintTokenFilter : TokenFilterBase {
		
		[DataMember(Name="max_output_size")]
		public int MaxOutputSize { get; set; }


		[DataMember(Name="separator")]
		public string Separator { get; set; }

	}
}
