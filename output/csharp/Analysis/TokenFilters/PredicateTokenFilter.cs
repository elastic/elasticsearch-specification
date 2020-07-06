using Nest.CommonOptions;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class PredicateTokenFilter : TokenFilterBase {
		
		[DataMember(Name="script")]
		public Script Script { get; set; }

	}
}
