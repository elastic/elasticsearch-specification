using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class MemoryStats  {
		
		[DataMember(Name="resident")]
		public string Resident { get; set; }


		[DataMember(Name="resident_in_bytes")]
		public long ResidentInBytes { get; set; }


		[DataMember(Name="share")]
		public string Share { get; set; }


		[DataMember(Name="share_in_bytes")]
		public long ShareInBytes { get; set; }


		[DataMember(Name="total_virtual")]
		public string TotalVirtual { get; set; }


		[DataMember(Name="total_virtual_in_bytes")]
		public long TotalVirtualInBytes { get; set; }

	}
}
