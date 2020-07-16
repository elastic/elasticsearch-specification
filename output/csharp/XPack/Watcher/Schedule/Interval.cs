using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Interval : ScheduleBase {
		
		[DataMember(Name="factor")]
		public long Factor { get; set; }


		[DataMember(Name="unit")]
		public IntervalUnit Unit { get; set; }

	}
}
