using Nest.Internal;
using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterOperatingSystemStats  {
		
		[DataMember(Name="allocated_processors")]
		public int AllocatedProcessors { get; set; }


		[DataMember(Name="available_processors")]
		public int AvailableProcessors { get; set; }


		[DataMember(Name="mem")]
		public OperatingSystemMemoryInfo Mem { get; set; }


		[DataMember(Name="names")]
		public List<ClusterOperatingSystemName> Names { get; set; }


		[DataMember(Name="pretty_names")]
		public List<ClusterOperatingSystemPrettyNane> PrettyNames { get; set; }

	}
}
