using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatTasksRecord : ICatRecord {
		
		[DataMember(Name="action")]
		public string Action { get; set; }


		[DataMember(Name="ip")]
		public string Ip { get; set; }


		[DataMember(Name="node")]
		public string Node { get; set; }


		[DataMember(Name="parent_task_id")]
		public string ParentTaskId { get; set; }


		[DataMember(Name="running_time")]
		public string RunningTime { get; set; }


		[DataMember(Name="start_time")]
		public string StartTime { get; set; }


		[DataMember(Name="task_id")]
		public string TaskId { get; set; }


		[DataMember(Name="timestamp")]
		public string Timestamp { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
