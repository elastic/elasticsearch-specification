using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class GeoBoundingBoxQuery  {
		
		[DataMember(Name="bounding_box")]
		public BoundingBox BoundingBox { get; set; }


		[DataMember(Name="type")]
		public GeoExecution Type { get; set; }


		[DataMember(Name="validation_method")]
		public GeoValidationMethod ValidationMethod { get; set; }

	}
}
