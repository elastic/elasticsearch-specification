using Nest.Cluster;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class FileSystemStats  {
		
		[DataMember(Name="data")]
		public List<DataPathStats> Data { get; set; }


		[DataMember(Name="timestamp")]
		public long Timestamp { get; set; }


		[DataMember(Name="total")]
		public TotalFileSystemStats Total { get; set; }

	}
}
