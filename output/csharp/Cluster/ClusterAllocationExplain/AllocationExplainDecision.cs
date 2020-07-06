
using System.Runtime.Serialization;

namespace Nest.Cluster {

	public enum AllocationExplainDecision {
  
		[DataMember(Name = "NO")] No,
		[DataMember(Name = "YES")] Yes,
		[DataMember(Name = "THROTTLE")] Throttle,
		[DataMember(Name = "ALWAYS")] Always
	}
}
