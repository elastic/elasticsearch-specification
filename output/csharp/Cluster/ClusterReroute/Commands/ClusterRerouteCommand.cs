using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterRerouteCommand  {
		
		[DataMember(Name="name")]
		public string Name { get; set; }

	}
}
