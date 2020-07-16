using Nest.Aggregations;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class MovingAverageAggregation  {
		
		[DataMember(Name="minimize")]
		public bool Minimize { get; set; }


		[DataMember(Name="model")]
		public MovingAverageModel Model { get; set; }


		[DataMember(Name="predict")]
		public int Predict { get; set; }


		[DataMember(Name="window")]
		public int Window { get; set; }

	}
}
