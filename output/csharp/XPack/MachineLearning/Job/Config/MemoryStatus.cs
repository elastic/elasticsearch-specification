
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum MemoryStatus {
  
		[DataMember(Name = "ok")] Ok,
		[DataMember(Name = "soft_limit")] SoftLimit,
		[DataMember(Name = "hard_limit")] HardLimit
	}
}
