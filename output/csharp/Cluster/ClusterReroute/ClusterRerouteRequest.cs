using Nest.CommonOptions;
using Nest.Cluster;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterRerouteRequest : RequestBase {
		
		[DataMember(Name="dry_run")]
		public bool DryRun { get; set; }


		[DataMember(Name="explain")]
		public bool Explain { get; set; }


		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="metric")]
		public List<string> Metric { get; set; }


		[DataMember(Name="retry_failed")]
		public bool RetryFailed { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="commands")]
		public List<ClusterRerouteCommand> Commands { get; set; }

	}
}
