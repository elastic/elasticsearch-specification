using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class TruncateTokenFilter : TokenFilterBase {
		
		[DataMember(Name="length")]
		public int Length { get; set; }

	}
}
