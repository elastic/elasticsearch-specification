using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StepKey  {
		
		[DataMember(Name="action")]
		public string Action { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="phase")]
		public string Phase { get; set; }

	}
}
