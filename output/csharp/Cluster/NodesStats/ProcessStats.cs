using Nest.Cluster;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ProcessStats  {
		
		[DataMember(Name="cpu")]
		public CpuStats Cpu { get; set; }


		[DataMember(Name="mem")]
		public MemoryStats Mem { get; set; }


		[DataMember(Name="open_file_descriptors")]
		public int OpenFileDescriptors { get; set; }


		[DataMember(Name="timestamp")]
		public long Timestamp { get; set; }

	}
}
