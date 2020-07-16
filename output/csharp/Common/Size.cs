
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum Size {
  
		[DataMember(Name = "Raw")] Raw,
		[DataMember(Name = "k")] K,
		[DataMember(Name = "m")] M,
		[DataMember(Name = "g")] G,
		[DataMember(Name = "t")] T,
		[DataMember(Name = "p")] P
	}
}
