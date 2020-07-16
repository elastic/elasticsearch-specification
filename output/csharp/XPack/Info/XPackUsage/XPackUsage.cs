using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class XPackUsage  {
		
		[DataMember(Name="available")]
		public bool Available { get; set; }


		[DataMember(Name="enabled")]
		public bool Enabled { get; set; }

	}
}
