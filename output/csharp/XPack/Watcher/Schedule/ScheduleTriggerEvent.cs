using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ScheduleTriggerEvent  {
		
		[DataMember(Name="scheduled_time")]
		public Union<DateTimeOffset, string> ScheduledTime { get; set; }


		[DataMember(Name="triggered_time")]
		public Union<DateTimeOffset, string> TriggeredTime { get; set; }

	}
}
