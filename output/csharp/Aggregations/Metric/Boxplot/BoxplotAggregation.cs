using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class BoxplotAggregation  {
		
		[DataMember(Name="compression")]
		public double Compression { get; set; }

	}
}
