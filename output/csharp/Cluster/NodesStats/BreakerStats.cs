using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class BreakerStats  {
		
		[DataMember(Name="estimated_size")]
		public string EstimatedSize { get; set; }


		[DataMember(Name="estimated_size_in_bytes")]
		public long EstimatedSizeInBytes { get; set; }


		[DataMember(Name="limit_size")]
		public string LimitSize { get; set; }


		[DataMember(Name="limit_size_in_bytes")]
		public long LimitSizeInBytes { get; set; }


		[DataMember(Name="overhead")]
		public float Overhead { get; set; }


		[DataMember(Name="tripped")]
		public float Tripped { get; set; }

	}
}
