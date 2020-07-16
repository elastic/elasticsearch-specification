using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Aggregations;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class DateRangeAggregation  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="missing")]
		public object Missing { get; set; }


		[DataMember(Name="ranges")]
		public List<DateRangeExpression> Ranges { get; set; }


		[DataMember(Name="time_zone")]
		public string TimeZone { get; set; }

	}
}
