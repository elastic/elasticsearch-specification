using Nest.CommonOptions;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class GeoDistanceAggregation  {
		
		[DataMember(Name="distance_type")]
		public GeoDistanceType DistanceType { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="origin")]
		public GeoLocation Origin { get; set; }


		[DataMember(Name="ranges")]
		public List<AggregationRange> Ranges { get; set; }


		[DataMember(Name="unit")]
		public DistanceUnit Unit { get; set; }

	}
}
