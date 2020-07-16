using Nest.Aggregations;
using Nest.CommonOptions;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class DateHistogramAggregation  {
		
		[DataMember(Name="calendar_interval")]
		public Union<DateInterval, Time> CalendarInterval { get; set; }


		[DataMember(Name="extended_bounds")]
		public ExtendedBounds<DateMath> ExtendedBounds { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="fixed_interval")]
		public Union<DateInterval, Time> FixedInterval { get; set; }


		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="interval")]
		public Union<DateInterval, Time> Interval { get; set; }


		[DataMember(Name="min_doc_count")]
		public int MinDocCount { get; set; }


		[DataMember(Name="missing")]
		public DateTimeOffset Missing { get; set; }


		[DataMember(Name="offset")]
		public string Offset { get; set; }


		[DataMember(Name="order")]
		public HistogramOrder Order { get; set; }


		[DataMember(Name="params")]
		public IDictionary<string, object> Params { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }


		[DataMember(Name="time_zone")]
		public string TimeZone { get; set; }

	}
}
