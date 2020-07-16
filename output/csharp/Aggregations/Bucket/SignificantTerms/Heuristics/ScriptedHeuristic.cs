using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class ScriptedHeuristic  {
		
		[DataMember(Name="script")]
		public Script Script { get; set; }

	}
}
