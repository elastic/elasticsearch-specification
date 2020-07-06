
using System.Runtime.Serialization;

namespace Nest.Cat {

	public enum ModelMemoryStatus {
  
		[DataMember(Name = "ok")] Ok,
		[DataMember(Name = "soft_limit")] SoftLimit,
		[DataMember(Name = "hard_limit")] HardLimit
	}
}
