using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class BoundingBox  {
		
		[DataMember(Name="bottom_right")]
		public GeoLocation BottomRight { get; set; }


		[DataMember(Name="top_left")]
		public GeoLocation TopLeft { get; set; }


		[DataMember(Name="wkt")]
		public string Wkt { get; set; }

	}
}
