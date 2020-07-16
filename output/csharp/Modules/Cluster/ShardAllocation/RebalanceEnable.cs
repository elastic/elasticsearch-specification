
using System.Runtime.Serialization;

namespace Nest.Modules {

	public enum RebalanceEnable {
  
		[DataMember(Name = "all")] All,
		[DataMember(Name = "primaries")] Primaries,
		[DataMember(Name = "replicas")] Replicas,
		[DataMember(Name = "none")] None
	}
}
