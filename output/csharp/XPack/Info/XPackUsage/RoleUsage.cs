using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RoleUsage  {
		
		[DataMember(Name="dls")]
		public bool Dls { get; set; }


		[DataMember(Name="fls")]
		public bool Fls { get; set; }


		[DataMember(Name="size")]
		public long Size { get; set; }

	}
}
