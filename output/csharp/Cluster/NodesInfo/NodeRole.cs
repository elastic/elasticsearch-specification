
using System.Runtime.Serialization;

namespace Nest.Cluster {

	public enum NodeRole {
  
		[DataMember(Name = "master")] Master,
		[DataMember(Name = "data")] Data,
		[DataMember(Name = "client")] Client,
		[DataMember(Name = "ingest")] Ingest,
		[DataMember(Name = "ml")] Ml,
		[DataMember(Name = "voting_only")] VotingOnly,
		[DataMember(Name = "transform")] Transform,
		[DataMember(Name = "remote_cluster_client")] RemoteClusterClient,
		[DataMember(Name = "coordinating_only")] CoordinatingOnly
	}
}
