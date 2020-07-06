using Nest.Cluster;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodesHotThreadsResponse : IResponse {
		
		[DataMember(Name="hot_threads")]
		public List<HotThreadInformation> HotThreads { get; set; }

	}
}
