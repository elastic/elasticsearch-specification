using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class PatternCaptureTokenFilter : TokenFilterBase {
		
		[DataMember(Name="patterns")]
		public List<string> Patterns { get; set; }


		[DataMember(Name="preserve_original")]
		public bool PreserveOriginal { get; set; }

	}
}
