using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RoleMappingUsage  {
		
		[DataMember(Name="enabled")]
		public int Enabled { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }

	}
}
