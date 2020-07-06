
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum NonNullSumFunction {
  
		[DataMember(Name = "NonNullSum")] NonNullSum,
		[DataMember(Name = "HighNonNullSum")] HighNonNullSum,
		[DataMember(Name = "LowNonNullSum")] LowNonNullSum
	}
}
