using Nest.CommonOptions;
using Nest.Internal;
using Nest.Common;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodesHotThreadsRequest : RequestBase {
		
		[DataMember(Name="ignore_idle_threads")]
		public bool IgnoreIdleThreads { get; set; }


		[DataMember(Name="interval")]
		public Time Interval { get; set; }


		[DataMember(Name="snapshots")]
		public long Snapshots { get; set; }


		[DataMember(Name="threads")]
		public long Threads { get; set; }


		[DataMember(Name="thread_type")]
		public ThreadType ThreadType { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }

	}
}
