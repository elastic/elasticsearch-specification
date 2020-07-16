using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterShardMetrics  {
		
		[DataMember(Name="avg")]
		public double Avg { get; set; }


		[DataMember(Name="max")]
		public double Max { get; set; }


		[DataMember(Name="min")]
		public double Min { get; set; }

	}
}
