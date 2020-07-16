using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class StupidBackoffSmoothingModel  {
		
		[DataMember(Name="discount")]
		public double Discount { get; set; }

	}
}
