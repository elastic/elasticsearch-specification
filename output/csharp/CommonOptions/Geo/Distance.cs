using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class Distance  {
		
		[DataMember(Name="precision")]
		public double Precision { get; set; }


		[DataMember(Name="unit")]
		public DistanceUnit Unit { get; set; }

	}
}
