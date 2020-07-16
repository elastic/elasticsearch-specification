using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterAllocationExplainRequest : RequestBase {
		
		[DataMember(Name="include_disk_info")]
		public bool IncludeDiskInfo { get; set; }


		[DataMember(Name="include_yes_decisions")]
		public bool IncludeYesDecisions { get; set; }


		[DataMember(Name="index")]
		public IndexName Index { get; set; }


		[DataMember(Name="primary")]
		public bool Primary { get; set; }


		[DataMember(Name="shard")]
		public int Shard { get; set; }

	}
}
