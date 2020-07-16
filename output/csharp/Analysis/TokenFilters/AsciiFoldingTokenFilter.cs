using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class AsciiFoldingTokenFilter : TokenFilterBase {
		
		[DataMember(Name="preserve_original")]
		public bool PreserveOriginal { get; set; }

	}
}
