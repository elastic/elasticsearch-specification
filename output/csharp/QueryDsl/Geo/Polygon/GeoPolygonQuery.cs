using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class GeoPolygonQuery  {
		
		[DataMember(Name="points")]
		public List<GeoLocation> Points { get; set; }


		[DataMember(Name="validation_method")]
		public GeoValidationMethod ValidationMethod { get; set; }

	}
}
