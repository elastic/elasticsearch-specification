using Nest.Cluster;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeInfoNetwork  {
		
		[DataMember(Name="primary_interface")]
		public NodeInfoNetworkInterface PrimaryInterface { get; set; }


		[DataMember(Name="refresh_interval")]
		public int RefreshInterval { get; set; }

	}
}
