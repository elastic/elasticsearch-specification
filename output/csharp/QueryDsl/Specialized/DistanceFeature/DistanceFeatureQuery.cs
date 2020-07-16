using Nest.QueryDsl;
using Nest.CommonOptions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class DistanceFeatureQuery  {
		
		[DataMember(Name="origin")]
		public Union<GeoCoordinate, DateMath> Origin { get; set; }


		[DataMember(Name="pivot")]
		public Union<Distance, Time> Pivot { get; set; }

	}
}
