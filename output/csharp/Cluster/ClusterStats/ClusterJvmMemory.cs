using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterJvmMemory  {
		
		[DataMember(Name="heap_max_in_bytes")]
		public long HeapMaxInBytes { get; set; }


		[DataMember(Name="heap_used_in_bytes")]
		public long HeapUsedInBytes { get; set; }

	}
}
