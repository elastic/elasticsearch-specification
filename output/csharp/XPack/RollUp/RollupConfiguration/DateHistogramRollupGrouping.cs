using Nest.CommonOptions;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DateHistogramRollupGrouping  {
		
		[DataMember(Name="delay")]
		public Time Delay { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="interval")]
		public Time Interval { get; set; }


		[DataMember(Name="time_zone")]
		public string TimeZone { get; set; }

	}
}
