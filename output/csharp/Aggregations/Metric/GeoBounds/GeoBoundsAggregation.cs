using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class GeoBoundsAggregation  {
		
		[DataMember(Name="wrap_longitude")]
		public bool WrapLongitude { get; set; }

	}
}
