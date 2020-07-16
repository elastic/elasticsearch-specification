
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum ThreadType {
  
		[DataMember(Name = "cpu")] Cpu,
		[DataMember(Name = "wait")] Wait,
		[DataMember(Name = "block")] Block
	}
}
