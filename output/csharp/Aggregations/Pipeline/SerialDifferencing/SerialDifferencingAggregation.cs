using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class SerialDifferencingAggregation  {
		
		[DataMember(Name="lag")]
		public int Lag { get; set; }

	}
}
