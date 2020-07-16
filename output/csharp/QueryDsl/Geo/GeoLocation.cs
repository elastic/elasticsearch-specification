using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class GeoLocation  {
		
		[DataMember(Name="lat")]
		public double Lat { get; set; }


		[DataMember(Name="lon")]
		public double Lon { get; set; }

	}
}
