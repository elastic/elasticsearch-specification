using Nest.Cluster;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeJvmStats  {
		
		[DataMember(Name="buffer_pools")]
		public IDictionary<string, NodeBufferPool> BufferPools { get; set; }


		[DataMember(Name="classes")]
		public JvmClassesStats Classes { get; set; }


		[DataMember(Name="gc")]
		public GarbageCollectionStats Gc { get; set; }


		[DataMember(Name="mem")]
		public MemoryStats Mem { get; set; }


		[DataMember(Name="threads")]
		public ThreadStats Threads { get; set; }


		[DataMember(Name="timestamp")]
		public long Timestamp { get; set; }


		[DataMember(Name="uptime")]
		public string Uptime { get; set; }


		[DataMember(Name="uptime_in_millis")]
		public long UptimeInMillis { get; set; }

	}
}
