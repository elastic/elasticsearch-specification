using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PostCalendarEventsRequest : RequestBase {
		
		[DataMember(Name="events")]
		public List<ScheduledEvent> Events { get; set; }

	}
}
