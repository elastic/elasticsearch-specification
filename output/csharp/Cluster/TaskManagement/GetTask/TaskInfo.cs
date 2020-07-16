using Nest.Cluster;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class TaskInfo  {
		
		[DataMember(Name="action")]
		public string Action { get; set; }


		[DataMember(Name="cancellable")]
		public bool Cancellable { get; set; }


		[DataMember(Name="children")]
		public List<TaskInfo> Children { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="headers")]
		public IDictionary<string, string> Headers { get; set; }


		[DataMember(Name="id")]
		public long Id { get; set; }


		[DataMember(Name="node")]
		public string Node { get; set; }


		[DataMember(Name="running_time_in_nanos")]
		public long RunningTimeInNanos { get; set; }


		[DataMember(Name="start_time_in_millis")]
		public long StartTimeInMillis { get; set; }


		[DataMember(Name="status")]
		public TaskStatus Status { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
