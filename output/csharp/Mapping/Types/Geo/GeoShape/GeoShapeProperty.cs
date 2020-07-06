using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class GeoShapeProperty : DocValuesPropertyBase {
		
		[DataMember(Name="coerce")]
		public bool Coerce { get; set; }


		[DataMember(Name="ignore_malformed")]
		public bool IgnoreMalformed { get; set; }


		[DataMember(Name="ignore_z_value")]
		public bool IgnoreZValue { get; set; }


		[DataMember(Name="orientation")]
		public GeoOrientation Orientation { get; set; }


		[DataMember(Name="strategy")]
		public GeoStrategy Strategy { get; set; }

	}
}
