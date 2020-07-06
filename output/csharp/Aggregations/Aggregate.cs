using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class Aggregate  {
		
		[DataMember(Name="meta")]
		public IDictionary<string, object> Meta { get; set; }

	}
}
