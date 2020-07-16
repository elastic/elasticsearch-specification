using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TriggerEventResult  {
		
		[DataMember(Name="manual")]
		public TriggerEventContainer Manual { get; set; }


		[DataMember(Name="triggered_time")]
		public DateTimeOffset TriggeredTime { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
