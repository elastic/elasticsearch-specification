using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class IpFilterUsage  {
		
		[DataMember(Name="http")]
		public bool Http { get; set; }


		[DataMember(Name="transport")]
		public bool Transport { get; set; }

	}
}
