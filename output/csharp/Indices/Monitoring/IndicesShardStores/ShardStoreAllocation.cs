
using System.Runtime.Serialization;

namespace Nest.Indices {

	public enum ShardStoreAllocation {
  
		[DataMember(Name = "primary")] Primary,
		[DataMember(Name = "replica")] Replica,
		[DataMember(Name = "unused")] Unused
	}
}
