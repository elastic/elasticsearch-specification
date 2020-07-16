using Nest.Internal;
using Nest.CommonOptions;
using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatThreadPoolRecord : ICatRecord {
		
		[DataMember(Name="active")]
		public int Active { get; set; }


		[DataMember(Name="completed")]
		public long Completed { get; set; }


		[DataMember(Name="core")]
		public int Core { get; set; }


		[DataMember(Name="ephemeral_node_id")]
		public string EphemeralNodeId { get; set; }


		[DataMember(Name="host")]
		public string Host { get; set; }


		[DataMember(Name="ip")]
		public string Ip { get; set; }


		[DataMember(Name="keep_alive")]
		public Time KeepAlive { get; set; }


		[DataMember(Name="largest")]
		public int Largest { get; set; }


		[DataMember(Name="max")]
		public int Max { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="node_id")]
		public string NodeId { get; set; }


		[DataMember(Name="node_name")]
		public string NodeName { get; set; }


		[DataMember(Name="pool_size")]
		public int PoolSize { get; set; }


		[DataMember(Name="port")]
		public int Port { get; set; }


		[DataMember(Name="pid")]
		public int Pid { get; set; }


		[DataMember(Name="queue")]
		public int Queue { get; set; }


		[DataMember(Name="queue_size")]
		public int QueueSize { get; set; }


		[DataMember(Name="rejected")]
		public long Rejected { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
