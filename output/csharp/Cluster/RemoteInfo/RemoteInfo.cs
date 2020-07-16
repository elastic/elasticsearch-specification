using Nest.CommonOptions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class RemoteInfo  {
		
		[DataMember(Name="connected")]
		public bool Connected { get; set; }


		[DataMember(Name="initial_connect_timeout")]
		public Time InitialConnectTimeout { get; set; }


		[DataMember(Name="max_connections_per_cluster")]
		public int MaxConnectionsPerCluster { get; set; }


		[DataMember(Name="num_nodes_connected")]
		public long NumNodesConnected { get; set; }


		[DataMember(Name="seeds")]
		public List<string> Seeds { get; set; }


		[DataMember(Name="skip_unavailable")]
		public bool SkipUnavailable { get; set; }

	}
}
