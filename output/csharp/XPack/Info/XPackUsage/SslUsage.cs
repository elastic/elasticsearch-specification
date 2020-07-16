using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SslUsage  {
		
		[DataMember(Name="http")]
		public SecurityFeatureToggle Http { get; set; }


		[DataMember(Name="transport")]
		public SecurityFeatureToggle Transport { get; set; }

	}
}
