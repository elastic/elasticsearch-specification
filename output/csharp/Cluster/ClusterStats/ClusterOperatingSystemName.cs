using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterOperatingSystemName  {
		
		[DataMember(Name="count")]
		public int Count { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }

	}
}
