using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecutingPolicy  {
		
		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="task")]
		public TaskInfo Task { get; set; }

	}
}
