using Nest.Cluster;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeJvmInfo  {
		
		[DataMember(Name="gc_collectors")]
		public List<string> GcCollectors { get; set; }


		[DataMember(Name="mem")]
		public NodeInfoJvmMemory Mem { get; set; }


		[DataMember(Name="memory_pools")]
		public List<string> MemoryPools { get; set; }


		[DataMember(Name="pid")]
		public int Pid { get; set; }


		[DataMember(Name="start_time_in_millis")]
		public long StartTimeInMillis { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }


		[DataMember(Name="vm_name")]
		public string VmName { get; set; }


		[DataMember(Name="vm_vendor")]
		public string VmVendor { get; set; }


		[DataMember(Name="vm_version")]
		public string VmVersion { get; set; }

	}
}
