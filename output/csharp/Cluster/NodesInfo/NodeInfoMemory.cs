using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeInfoMemory  {
		
		[DataMember(Name="total")]
		public string Total { get; set; }


		[DataMember(Name="total_in_bytes")]
		public long TotalInBytes { get; set; }

	}
}
