using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class WatcherStatsResponse : IResponse {
		
		[DataMember(Name="cluster_name")]
		public string ClusterName { get; set; }


		[DataMember(Name="manually_stopped")]
		public bool ManuallyStopped { get; set; }


		[DataMember(Name="stats")]
		public List<WatcherNodeStats> Stats { get; set; }

	}
}
