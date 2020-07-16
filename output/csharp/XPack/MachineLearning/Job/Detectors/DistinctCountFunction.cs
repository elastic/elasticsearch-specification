
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum DistinctCountFunction {
  
		[DataMember(Name = "DistinctCount")] DistinctCount,
		[DataMember(Name = "LowDistinctCount")] LowDistinctCount,
		[DataMember(Name = "HighDistinctCount")] HighDistinctCount
	}
}
