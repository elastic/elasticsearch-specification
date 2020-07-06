using Nest.Cluster;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class GetTaskResponse : IResponse {
		
		[DataMember(Name="completed")]
		public bool Completed { get; set; }


		[DataMember(Name="task")]
		public TaskInfo Task { get; set; }

	}
}
