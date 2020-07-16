
using System.Runtime.Serialization;

namespace Nest.Modules {

	public enum AllocationEnable {
  
		[DataMember(Name = "all")] All,
		[DataMember(Name = "primaries")] Primaries,
		[DataMember(Name = "new_primaries")] NewPrimaries,
		[DataMember(Name = "none")] None
	}
}
