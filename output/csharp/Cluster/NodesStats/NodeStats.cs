using Nest.Cluster;
using Nest.Indices;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeStats  {
		
		[DataMember(Name="adaptive_selection")]
		public IDictionary<string, AdaptiveSelectionStats> AdaptiveSelection { get; set; }


		[DataMember(Name="breakers")]
		public IDictionary<string, BreakerStats> Breakers { get; set; }


		[DataMember(Name="fs")]
		public FileSystemStats Fs { get; set; }


		[DataMember(Name="host")]
		public string Host { get; set; }


		[DataMember(Name="http")]
		public HttpStats Http { get; set; }


		[DataMember(Name="indices")]
		public IndexStats Indices { get; set; }


		[DataMember(Name="ingest")]
		public NodeIngestStats Ingest { get; set; }


		[DataMember(Name="ip")]
		public List<string> Ip { get; set; }


		[DataMember(Name="jvm")]
		public NodeJvmStats Jvm { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="os")]
		public OperatingSystemStats Os { get; set; }


		[DataMember(Name="process")]
		public ProcessStats Process { get; set; }


		[DataMember(Name="roles")]
		public List<NodeRole> Roles { get; set; }


		[DataMember(Name="script")]
		public ScriptStats Script { get; set; }


		[DataMember(Name="thread_pool")]
		public IDictionary<string, ThreadCountStats> ThreadPool { get; set; }


		[DataMember(Name="timestamp")]
		public long Timestamp { get; set; }


		[DataMember(Name="transport")]
		public TransportStats Transport { get; set; }


		[DataMember(Name="transport_address")]
		public string TransportAddress { get; set; }

	}
}
