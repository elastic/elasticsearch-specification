
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum NestedScoreMode {
  
		[DataMember(Name = "avg")] Avg,
		[DataMember(Name = "sum")] Sum,
		[DataMember(Name = "min")] Min,
		[DataMember(Name = "max")] Max,
		[DataMember(Name = "none")] None
	}
}
