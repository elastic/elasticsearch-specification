using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class RoutingField  {
		
		[DataMember(Name="required")]
		public bool Required { get; set; }

	}
}
