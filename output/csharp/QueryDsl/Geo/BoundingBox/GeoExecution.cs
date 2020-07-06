
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum GeoExecution {
  
		[DataMember(Name = "memory")] Memory,
		[DataMember(Name = "indexed")] Indexed
	}
}
