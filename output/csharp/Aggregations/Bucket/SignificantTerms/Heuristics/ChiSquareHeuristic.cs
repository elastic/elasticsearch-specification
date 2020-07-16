using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class ChiSquareHeuristic  {
		
		[DataMember(Name="background_is_superset")]
		public bool BackgroundIsSuperset { get; set; }


		[DataMember(Name="include_negatives")]
		public bool IncludeNegatives { get; set; }

	}
}
