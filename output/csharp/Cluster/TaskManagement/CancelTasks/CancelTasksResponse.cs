using Nest.Internal;
using Nest.Cluster;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class CancelTasksResponse : IResponse {
		
		[DataMember(Name="node_failures")]
		public List<ErrorCause> NodeFailures { get; set; }


		[DataMember(Name="nodes")]
		public IDictionary<string, TaskExecutingNode> Nodes { get; set; }

	}
}
