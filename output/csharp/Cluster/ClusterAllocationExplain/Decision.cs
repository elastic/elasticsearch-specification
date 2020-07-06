
using System.Runtime.Serialization;

namespace Nest.Cluster {

	public enum Decision {
  
		[DataMember(Name = "yes")] Yes,
		[DataMember(Name = "no")] No,
		[DataMember(Name = "worse_balance")] WorseBalance,
		[DataMember(Name = "throttled")] Throttled,
		[DataMember(Name = "awaiting_info")] AwaitingInfo,
		[DataMember(Name = "allocation_delayed")] AllocationDelayed,
		[DataMember(Name = "no_valid_shard_copy")] NoValidShardCopy,
		[DataMember(Name = "no_attempt")] NoAttempt
	}
}
