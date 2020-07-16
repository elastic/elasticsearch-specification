using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TimeOfWeek  {
		
		[DataMember(Name="at")]
		public List<string> At { get; set; }


		[DataMember(Name="on")]
		public List<Day> On { get; set; }

	}
}
