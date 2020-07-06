
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum ChildScoreMode {
  
		[DataMember(Name = "none")] None,
		[DataMember(Name = "avg")] Avg,
		[DataMember(Name = "sum")] Sum,
		[DataMember(Name = "max")] Max,
		[DataMember(Name = "min")] Min
	}
}
