
using System.Runtime.Serialization;

namespace Nest.Cluster {

	public enum UnassignedInformationReason {
  
		[DataMember(Name = "INDEX_CREATED")] IndexCreated,
		[DataMember(Name = "CLUSTER_RECOVERED")] ClusterRecovered,
		[DataMember(Name = "INDEX_REOPENED")] IndexReopened,
		[DataMember(Name = "DANGLING_INDEX_IMPORTED")] DanglingIndexImported,
		[DataMember(Name = "NEW_INDEX_RESTORED")] NewIndexRestored,
		[DataMember(Name = "EXISTING_INDEX_RESTORED")] ExistingIndexRestored,
		[DataMember(Name = "REPLICA_ADDED")] ReplicaAdded,
		[DataMember(Name = "ALLOCATION_FAILED")] AllocationFailed,
		[DataMember(Name = "NODE_LEFT")] NodeLeft,
		[DataMember(Name = "REROUTE_CANCELLED")] RerouteCancelled,
		[DataMember(Name = "REINITIALIZED")] Reinitialized,
		[DataMember(Name = "REALLOCATED_REPLICA")] ReallocatedReplica,
		[DataMember(Name = "PRIMARY_FAILED")] PrimaryFailed,
		[DataMember(Name = "FORCED_EMPTY_PRIMARY")] ForcedEmptyPrimary,
		[DataMember(Name = "MANUAL_ALLOCATION")] ManualAllocation
	}
}
