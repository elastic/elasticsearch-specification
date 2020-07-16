
using System.Runtime.Serialization;

namespace Nest.CommonOptions {

	public enum TimeUnit {
  
		[DataMember(Name = "nanos")] Nanos,
		[DataMember(Name = "micros")] Micros,
		[DataMember(Name = "ms")] Ms,
		[DataMember(Name = "s")] S,
		[DataMember(Name = "m")] M,
		[DataMember(Name = "h")] H,
		[DataMember(Name = "d")] D
	}
}
