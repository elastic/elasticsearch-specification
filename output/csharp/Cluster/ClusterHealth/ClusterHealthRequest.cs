using Nest.Common;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterHealthRequest : RequestBase {
		
		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="level")]
		public Level Level { get; set; }


		[DataMember(Name="local")]
		public bool Local { get; set; }


		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="wait_for_active_shards")]
		public string WaitForActiveShards { get; set; }


		[DataMember(Name="wait_for_events")]
		public WaitForEvents WaitForEvents { get; set; }


		[DataMember(Name="wait_for_nodes")]
		public string WaitForNodes { get; set; }


		[DataMember(Name="wait_for_no_initializing_shards")]
		public bool WaitForNoInitializingShards { get; set; }


		[DataMember(Name="wait_for_no_relocating_shards")]
		public bool WaitForNoRelocatingShards { get; set; }


		[DataMember(Name="wait_for_status")]
		public WaitForStatus WaitForStatus { get; set; }

	}
}
