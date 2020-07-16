using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ScheduledEvent  {
		
		[DataMember(Name="calendar_id")]
		public Id CalendarId { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="end_time")]
		public DateTimeOffset EndTime { get; set; }


		[DataMember(Name="event_id")]
		public Id EventId { get; set; }


		[DataMember(Name="start_time")]
		public DateTimeOffset StartTime { get; set; }

	}
}
