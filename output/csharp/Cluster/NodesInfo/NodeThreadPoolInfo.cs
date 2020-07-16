using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeThreadPoolInfo  {
		
		[DataMember(Name="core")]
		public int Core { get; set; }


		[DataMember(Name="keep_alive")]
		public string KeepAlive { get; set; }


		[DataMember(Name="max")]
		public int Max { get; set; }


		[DataMember(Name="queue_size")]
		public int QueueSize { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
