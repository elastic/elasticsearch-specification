using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class IcuFoldingTokenFilter : TokenFilterBase {
		
		[DataMember(Name="unicode_set_filter")]
		public string UnicodeSetFilter { get; set; }

	}
}
