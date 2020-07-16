using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SecurityNode  {
		
		[DataMember(Name="name")]
		public string Name { get; set; }

	}
}
