using Nest.Cluster;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterPendingTasksResponse : IResponse {
		
		[DataMember(Name="tasks")]
		public List<PendingTask> Tasks { get; set; }

	}
}
