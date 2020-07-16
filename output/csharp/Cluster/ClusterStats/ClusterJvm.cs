using Nest.Internal;
using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterJvm  {
		
		[DataMember(Name="max_uptime_in_millis")]
		public long MaxUptimeInMillis { get; set; }


		[DataMember(Name="mem")]
		public ClusterJvmMemory Mem { get; set; }


		[DataMember(Name="threads")]
		public long Threads { get; set; }


		[DataMember(Name="versions")]
		public List<ClusterJvmVersion> Versions { get; set; }

	}
}
