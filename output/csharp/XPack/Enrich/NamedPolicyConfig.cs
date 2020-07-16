using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class NamedPolicyConfig  {
		
		[DataMember(Name="geo_match")]
		public NamedPolicy GeoMatch { get; set; }


		[DataMember(Name="match")]
		public NamedPolicy Match { get; set; }

	}
}
