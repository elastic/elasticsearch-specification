using Nest.Cluster;
using Nest.CommonOptions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeInfo  {
		
		[DataMember(Name="attributes")]
		public IDictionary<string, string> Attributes { get; set; }


		[DataMember(Name="build_flavor")]
		public string BuildFlavor { get; set; }


		[DataMember(Name="build_hash")]
		public string BuildHash { get; set; }


		[DataMember(Name="build_type")]
		public string BuildType { get; set; }


		[DataMember(Name="host")]
		public string Host { get; set; }


		[DataMember(Name="http")]
		public NodeInfoHttp Http { get; set; }


		[DataMember(Name="ip")]
		public string Ip { get; set; }


		[DataMember(Name="jvm")]
		public NodeJvmInfo Jvm { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="network")]
		public NodeInfoNetwork Network { get; set; }


		[DataMember(Name="os")]
		public NodeOperatingSystemInfo Os { get; set; }


		[DataMember(Name="plugins")]
		public List<PluginStats> Plugins { get; set; }


		[DataMember(Name="process")]
		public NodeProcessInfo Process { get; set; }


		[DataMember(Name="roles")]
		public List<NodeRole> Roles { get; set; }


		[DataMember(Name="settings")]
		public List<string> Settings { get; set; }


		[DataMember(Name="thread_pool")]
		public IDictionary<string, NodeThreadPoolInfo> ThreadPool { get; set; }


		[DataMember(Name="total_indexing_buffer")]
		public long TotalIndexingBuffer { get; set; }


		[DataMember(Name="transport")]
		public NodeInfoTransport Transport { get; set; }


		[DataMember(Name="transport_address")]
		public string TransportAddress { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
