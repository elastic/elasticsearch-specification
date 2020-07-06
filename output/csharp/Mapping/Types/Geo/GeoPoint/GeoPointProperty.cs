using Nest.QueryDsl;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class GeoPointProperty : DocValuesPropertyBase {
		
		[DataMember(Name="ignore_malformed")]
		public bool IgnoreMalformed { get; set; }


		[DataMember(Name="ignore_z_value")]
		public bool IgnoreZValue { get; set; }


		[DataMember(Name="null_value")]
		public GeoLocation NullValue { get; set; }

	}
}
