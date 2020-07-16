using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SecurityFeatureToggle  {
		
		[DataMember(Name="enabled")]
		public bool Enabled { get; set; }

	}
}
