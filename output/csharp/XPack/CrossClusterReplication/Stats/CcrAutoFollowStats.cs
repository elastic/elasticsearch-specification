using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CcrAutoFollowStats  {
		
		[DataMember(Name="auto_followed_clusters")]
		public List<AutoFollowedCluster> AutoFollowedClusters { get; set; }


		[DataMember(Name="number_of_failed_follow_indices")]
		public long NumberOfFailedFollowIndices { get; set; }


		[DataMember(Name="number_of_failed_remote_cluster_state_requests")]
		public long NumberOfFailedRemoteClusterStateRequests { get; set; }


		[DataMember(Name="number_of_successful_follow_indices")]
		public long NumberOfSuccessfulFollowIndices { get; set; }


		[DataMember(Name="recent_auto_follow_errors")]
		public List<ErrorCause> RecentAutoFollowErrors { get; set; }

	}
}
