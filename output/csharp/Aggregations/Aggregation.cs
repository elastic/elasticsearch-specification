using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class Aggregation  {
		
		[DataMember(Name="meta")]
		public IDictionary<string, object> Meta { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }

	}
}
