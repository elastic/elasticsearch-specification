using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class CancelTasksRequest : RequestBase {
		
		[DataMember(Name="actions")]
		public List<string> Actions { get; set; }


		[DataMember(Name="nodes")]
		public List<string> Nodes { get; set; }


		[DataMember(Name="parent_task_id")]
		public string ParentTaskId { get; set; }

	}
}
