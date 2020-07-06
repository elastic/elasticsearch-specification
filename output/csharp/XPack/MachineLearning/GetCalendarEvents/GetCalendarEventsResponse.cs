using Nest.Internal;
using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetCalendarEventsResponse : IResponse {
		
		[DataMember(Name="count")]
		public int Count { get; set; }


		[DataMember(Name="events")]
		public List<ScheduledEvent> Events { get; set; }

	}
}
