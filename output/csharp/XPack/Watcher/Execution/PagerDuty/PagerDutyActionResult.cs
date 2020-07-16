using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PagerDutyActionResult  {
		
		[DataMember(Name="sent_event")]
		public PagerDutyActionEventResult SentEvent { get; set; }

	}
}
