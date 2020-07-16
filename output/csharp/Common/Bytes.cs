
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum Bytes {
  
		[DataMember(Name = "b")] B,
		[DataMember(Name = "k")] K,
		[DataMember(Name = "kb")] Kb,
		[DataMember(Name = "m")] M,
		[DataMember(Name = "mb")] Mb,
		[DataMember(Name = "g")] G,
		[DataMember(Name = "gb")] Gb,
		[DataMember(Name = "t")] T,
		[DataMember(Name = "tb")] Tb,
		[DataMember(Name = "p")] P,
		[DataMember(Name = "pb")] Pb
	}
}
