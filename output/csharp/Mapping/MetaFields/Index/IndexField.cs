using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class IndexField  {
		
		[DataMember(Name="enabled")]
		public bool Enabled { get; set; }

	}
}
