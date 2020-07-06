
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum NonZeroCountFunction {
  
		[DataMember(Name = "NonZeroCount")] NonZeroCount,
		[DataMember(Name = "LowNonZeroCount")] LowNonZeroCount,
		[DataMember(Name = "HighNonZeroCount")] HighNonZeroCount
	}
}
