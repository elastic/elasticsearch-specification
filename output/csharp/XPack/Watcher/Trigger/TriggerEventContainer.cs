using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TriggerEventContainer  {
		
		[DataMember(Name="schedule")]
		public ScheduleTriggerEvent Schedule { get; set; }

	}
}
