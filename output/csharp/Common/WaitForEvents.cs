
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum WaitForEvents {
  
		[DataMember(Name = "immediate")] Immediate,
		[DataMember(Name = "urgent")] Urgent,
		[DataMember(Name = "high")] High,
		[DataMember(Name = "normal")] Normal,
		[DataMember(Name = "low")] Low,
		[DataMember(Name = "languid")] Languid
	}
}
