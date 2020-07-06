using Nest.Cluster;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterNodesStats  {
		
		[DataMember(Name="count")]
		public ClusterNodeCount Count { get; set; }


		[DataMember(Name="discovery_types")]
		public IDictionary<string, int> DiscoveryTypes { get; set; }


		[DataMember(Name="fs")]
		public ClusterFileSystem Fs { get; set; }


		[DataMember(Name="ingest")]
		public ClusterIngestStats Ingest { get; set; }


		[DataMember(Name="jvm")]
		public ClusterJvm Jvm { get; set; }


		[DataMember(Name="network_types")]
		public ClusterNetworkTypes NetworkTypes { get; set; }


		[DataMember(Name="os")]
		public ClusterOperatingSystemStats Os { get; set; }


		[DataMember(Name="packaging_types")]
		public List<NodePackagingType> PackagingTypes { get; set; }


		[DataMember(Name="plugins")]
		public List<PluginStats> Plugins { get; set; }


		[DataMember(Name="process")]
		public ClusterProcess Process { get; set; }


		[DataMember(Name="versions")]
		public List<string> Versions { get; set; }

	}
}
