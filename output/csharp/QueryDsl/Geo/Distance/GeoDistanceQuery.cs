using Nest.CommonOptions;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class GeoDistanceQuery  {
		
		[DataMember(Name="distance")]
		public Distance Distance { get; set; }


		[DataMember(Name="distance_type")]
		public GeoDistanceType DistanceType { get; set; }


		[DataMember(Name="location")]
		public GeoLocation Location { get; set; }


		[DataMember(Name="validation_method")]
		public GeoValidationMethod ValidationMethod { get; set; }

	}
}
