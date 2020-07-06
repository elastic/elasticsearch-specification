using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class CompactNodeInfo  {
		
		[DataMember(Name="name")]
		public string Name { get; set; }

	}
}
