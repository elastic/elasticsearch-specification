
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum IcuTransformDirection {
  
		[DataMember(Name = "forward")] Forward,
		[DataMember(Name = "reverse")] Reverse
	}
}
