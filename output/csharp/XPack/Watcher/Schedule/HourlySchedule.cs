using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class HourlySchedule  {
		
		[DataMember(Name="minute")]
		public List<int> Minute { get; set; }

	}
}
