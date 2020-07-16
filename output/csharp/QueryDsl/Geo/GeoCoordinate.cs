using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class GeoCoordinate : GeoLocation {
		
		[DataMember(Name="z")]
		public double Z { get; set; }

	}
}
