using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class GoogleNormalizedDistanceHeuristic  {
		
		[DataMember(Name="background_is_superset")]
		public bool BackgroundIsSuperset { get; set; }

	}
}
