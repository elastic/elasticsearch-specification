using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeBufferPool  {
		
		[DataMember(Name="count")]
		public long Count { get; set; }


		[DataMember(Name="total_capacity")]
		public string TotalCapacity { get; set; }


		[DataMember(Name="total_capacity_in_bytes")]
		public long TotalCapacityInBytes { get; set; }


		[DataMember(Name="used")]
		public string Used { get; set; }


		[DataMember(Name="used_in_bytes")]
		public long UsedInBytes { get; set; }

	}
}
