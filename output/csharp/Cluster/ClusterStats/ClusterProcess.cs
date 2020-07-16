using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterProcess  {
		
		[DataMember(Name="cpu")]
		public ClusterProcessCpu Cpu { get; set; }


		[DataMember(Name="open_file_descriptors")]
		public ClusterProcessOpenFileDescriptors OpenFileDescriptors { get; set; }

	}
}
