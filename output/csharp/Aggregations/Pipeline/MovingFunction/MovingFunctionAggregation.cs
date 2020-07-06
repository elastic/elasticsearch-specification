using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class MovingFunctionAggregation  {
		
		[DataMember(Name="script")]
		public string Script { get; set; }


		[DataMember(Name="shift")]
		public int Shift { get; set; }


		[DataMember(Name="window")]
		public int Window { get; set; }

	}
}
