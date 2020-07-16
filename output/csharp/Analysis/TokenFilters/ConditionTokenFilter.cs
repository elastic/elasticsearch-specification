using Nest.CommonOptions;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class ConditionTokenFilter : TokenFilterBase {
		
		[DataMember(Name="filter")]
		public List<string> Filter { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }

	}
}
