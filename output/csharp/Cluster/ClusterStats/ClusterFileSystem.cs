using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterFileSystem  {
		
		[DataMember(Name="available_in_bytes")]
		public long AvailableInBytes { get; set; }


		[DataMember(Name="free_in_bytes")]
		public long FreeInBytes { get; set; }


		[DataMember(Name="total_in_bytes")]
		public long TotalInBytes { get; set; }

	}
}
