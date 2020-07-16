using Nest.Cluster;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterIndicesShardsStats  {
		
		[DataMember(Name="index")]
		public ClusterIndicesShardsIndexStats Index { get; set; }


		[DataMember(Name="primaries")]
		public double Primaries { get; set; }


		[DataMember(Name="replication")]
		public double Replication { get; set; }


		[DataMember(Name="total")]
		public double Total { get; set; }

	}
}
