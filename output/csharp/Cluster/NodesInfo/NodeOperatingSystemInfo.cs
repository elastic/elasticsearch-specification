using Nest.Internal;
using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeOperatingSystemInfo  {
		
		[DataMember(Name="arch")]
		public string Arch { get; set; }


		[DataMember(Name="available_processors")]
		public int AvailableProcessors { get; set; }


		[DataMember(Name="cpu")]
		public NodeInfoOscpu Cpu { get; set; }


		[DataMember(Name="mem")]
		public NodeInfoMemory Mem { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="pretty_name")]
		public string PrettyName { get; set; }


		[DataMember(Name="refresh_interval_in_millis")]
		public int RefreshIntervalInMillis { get; set; }


		[DataMember(Name="swap")]
		public NodeInfoMemory Swap { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
