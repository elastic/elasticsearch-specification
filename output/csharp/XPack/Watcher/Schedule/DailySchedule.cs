using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DailySchedule  {
		
		[DataMember(Name="at")]
		public Union<List<string>, TimeOfDay> At { get; set; }

	}
}
