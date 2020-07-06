
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum IntervalUnit {
  
		[DataMember(Name = "s")] S,
		[DataMember(Name = "m")] M,
		[DataMember(Name = "h")] H,
		[DataMember(Name = "d")] D,
		[DataMember(Name = "w")] W
	}
}
