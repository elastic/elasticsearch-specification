
using System.Runtime.Serialization;

namespace Nest.Modules {

	public enum AllowRebalance {
  
		[DataMember(Name = "always")] Always,
		[DataMember(Name = "indices_primaries_active")] IndicesPrimariesActive,
		[DataMember(Name = "indices_all_active")] IndicesAllActive
	}
}
