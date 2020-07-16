using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TriggerContainer  {
		
		[DataMember(Name="schedule")]
		public ScheduleContainer Schedule { get; set; }

	}
}
