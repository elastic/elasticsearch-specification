using Nest.Cluster;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class OperatingSystemStats  {
		
		[DataMember(Name="cpu")]
		public CpuStats Cpu { get; set; }


		[DataMember(Name="mem")]
		public ExtendedMemoryStats Mem { get; set; }


		[DataMember(Name="swap")]
		public MemoryStats Swap { get; set; }


		[DataMember(Name="timestamp")]
		public long Timestamp { get; set; }

	}
}
