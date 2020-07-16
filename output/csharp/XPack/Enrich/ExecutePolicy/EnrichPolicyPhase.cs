
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum EnrichPolicyPhase {
  
		[DataMember(Name = "SCHEDULED")] Scheduled,
		[DataMember(Name = "RUNNING")] Running,
		[DataMember(Name = "COMPLETE")] Complete,
		[DataMember(Name = "FAILED")] Failed
	}
}
