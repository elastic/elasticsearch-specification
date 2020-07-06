using Nest.Internal;
using Nest.CommonAbstractions;
using Nest.Aggregations;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class AutoDateHistogramAggregation  {
		
		[DataMember(Name="buckets")]
		public int Buckets { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="minimum_interval")]
		public MinimumInterval MinimumInterval { get; set; }


		[DataMember(Name="missing")]
		public DateTimeOffset Missing { get; set; }


		[DataMember(Name="offset")]
		public string Offset { get; set; }


		[DataMember(Name="params")]
		public IDictionary<string, object> Params { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }


		[DataMember(Name="time_zone")]
		public string TimeZone { get; set; }

	}
}
