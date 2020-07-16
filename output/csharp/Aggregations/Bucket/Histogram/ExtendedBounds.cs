using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class ExtendedBounds<T>  {
		
		[DataMember(Name="max")]
		public T Max { get; set; }


		[DataMember(Name="min")]
		public T Min { get; set; }

	}
}
