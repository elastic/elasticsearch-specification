using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeInfoOscpu  {
		
		[DataMember(Name="cache_size")]
		public string CacheSize { get; set; }


		[DataMember(Name="cache_size_in_bytes")]
		public int CacheSizeInBytes { get; set; }


		[DataMember(Name="cores_per_socket")]
		public int CoresPerSocket { get; set; }


		[DataMember(Name="mhz")]
		public int Mhz { get; set; }


		[DataMember(Name="model")]
		public string Model { get; set; }


		[DataMember(Name="total_cores")]
		public int TotalCores { get; set; }


		[DataMember(Name="total_sockets")]
		public int TotalSockets { get; set; }


		[DataMember(Name="vendor")]
		public string Vendor { get; set; }

	}
}
