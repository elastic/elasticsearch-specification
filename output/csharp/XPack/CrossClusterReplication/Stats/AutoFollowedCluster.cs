using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AutoFollowedCluster  {
		
		[DataMember(Name="cluster_name")]
		public string ClusterName { get; set; }


		[DataMember(Name="last_seen_metadata_version")]
		public long LastSeenMetadataVersion { get; set; }


		[DataMember(Name="time_since_last_check_millis")]
		public DateTimeOffset TimeSinceLastCheckMillis { get; set; }

	}
}
