using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatHealthRecord : ICatRecord {
		
		[DataMember(Name="cluster")]
		public string Cluster { get; set; }


		[DataMember(Name="epoch")]
		public string Epoch { get; set; }


		[DataMember(Name="init")]
		public string Init { get; set; }


		[DataMember(Name="node.data")]
		public string NodeData { get; set; }


		[DataMember(Name="node.total")]
		public string NodeTotal { get; set; }


		[DataMember(Name="pending_tasks")]
		public string PendingTasks { get; set; }


		[DataMember(Name="pri")]
		public string Pri { get; set; }


		[DataMember(Name="relo")]
		public string Relo { get; set; }


		[DataMember(Name="shards")]
		public string Shards { get; set; }


		[DataMember(Name="status")]
		public string Status { get; set; }


		[DataMember(Name="timestamp")]
		public string Timestamp { get; set; }


		[DataMember(Name="unassign")]
		public string Unassign { get; set; }

	}
}
