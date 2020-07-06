using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class OperatingSystemMemoryInfo  {
		
		[DataMember(Name="free_in_bytes")]
		public long FreeInBytes { get; set; }


		[DataMember(Name="free_percent")]
		public int FreePercent { get; set; }


		[DataMember(Name="total_in_bytes")]
		public long TotalInBytes { get; set; }


		[DataMember(Name="used_in_bytes")]
		public long UsedInBytes { get; set; }


		[DataMember(Name="used_percent")]
		public int UsedPercent { get; set; }

	}
}
