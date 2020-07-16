using Nest.Common;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ListTasksRequest : RequestBase {
		
		[DataMember(Name="actions")]
		public List<string> Actions { get; set; }


		[DataMember(Name="detailed")]
		public bool Detailed { get; set; }


		[DataMember(Name="group_by")]
		public GroupBy GroupBy { get; set; }


		[DataMember(Name="nodes")]
		public List<string> Nodes { get; set; }


		[DataMember(Name="parent_task_id")]
		public string ParentTaskId { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="wait_for_completion")]
		public bool WaitForCompletion { get; set; }

	}
}
