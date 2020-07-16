using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class NestedProperty : ObjectProperty {
		
		[DataMember(Name="include_in_parent")]
		public bool IncludeInParent { get; set; }


		[DataMember(Name="include_in_root")]
		public bool IncludeInRoot { get; set; }

	}
}
