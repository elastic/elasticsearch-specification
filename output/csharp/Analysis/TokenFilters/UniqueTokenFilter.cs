using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class UniqueTokenFilter : TokenFilterBase {
		
		[DataMember(Name="only_on_same_position")]
		public bool OnlyOnSamePosition { get; set; }

	}
}
