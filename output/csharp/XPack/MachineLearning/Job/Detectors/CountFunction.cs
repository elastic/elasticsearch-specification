
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum CountFunction {
  
		[DataMember(Name = "Count")] Count,
		[DataMember(Name = "HighCount")] HighCount,
		[DataMember(Name = "LowCount")] LowCount
	}
}
