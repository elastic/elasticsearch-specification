using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class MovingAverageModel  {
		
		[DataMember(Name="name")]
		public string Name { get; set; }

	}
}
