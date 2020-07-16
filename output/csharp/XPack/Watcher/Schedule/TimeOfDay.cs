using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TimeOfDay  {
		
		[DataMember(Name="hour")]
		public List<int> Hour { get; set; }


		[DataMember(Name="minute")]
		public List<int> Minute { get; set; }

	}
}
