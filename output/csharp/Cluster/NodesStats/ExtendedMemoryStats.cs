using Nest.Internal;
using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ExtendedMemoryStats : MemoryStats {
		
		[DataMember(Name="free_percent")]
		public int FreePercent { get; set; }


		[DataMember(Name="used_percent")]
		public int UsedPercent { get; set; }

	}
}
