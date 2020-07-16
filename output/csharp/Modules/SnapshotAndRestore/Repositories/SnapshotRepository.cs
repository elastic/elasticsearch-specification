using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class SnapshotRepository  {
		
		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
